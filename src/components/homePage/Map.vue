<template v-if="showMap">
  <div class="travel-map">
    <div class="google-map" ref="googleMap"></div>
    <template v-if="Boolean(this.google) && Boolean(this.map)">
      <GoogleMapMarker
        v-for="marker in markers"
        :key="marker.id"
        :marker="marker"
        :google="google"
        :map="map"
      />
      <GoogleMapLine
        v-for="line in lines"
        :key="line.id"
        :path.sync="line.path"
        :google="google"
        :map="map"
      />
    </template>
  </div>
</template>

<script>
import GoogleMapsApiLoader from "google-maps-api-loader";
import GoogleMapMarker from "../googleMap/GoogleMapMarker";
import GoogleMapLine from "../googleMap/GoogleMapLine";

import { mapSettings } from "@/constants/mapSettings";

export default {
  name: "Map",
  components: {
    GoogleMapMarker,
    GoogleMapLine
  },

  data: () => ({
    showMap: true,
    markers: [],
    lines: [],
    google: null,
    map: null
  }),

  async mounted() {
    this.google = await GoogleMapsApiLoader({
      apiKey: this.$store.state.global.apiKey
    });

    let result = await this.$axios.get(this.$store.state.global.host + 'mappoints')
    if (result.data.status === 'ok') {
      this.markers = result.data.data.markers
      this.lines = result.data.data.lines
      this.initializeMap();
      this.showMap = false
    } else {
      this.showMap = true
    }
  },
  computed: {
    mapConfig() {
      return {
        ...mapSettings
      };
    }
  },
  methods: {
    initializeMap() {
      const mapContainer = this.$refs.googleMap;
      this.map = new this.google.maps.Map(mapContainer, this.mapConfig);

      let bounds = this.markers.reduce(function(bounds, marker) {
        return bounds.extend(marker.position);
      }, new this.google.maps.LatLngBounds());

      this.map.setCenter(bounds.getCenter());
      this.map.fitBounds(bounds);
    }
  }
};
</script>
<style lang="sass" scoped>
.travel-map
  height: 400px
.google-map
  width: 100%
  height: 100%
</style>
