<template>
  <div>
    <div class="google-map" ref="googleMap"></div>
    <template v-if="Boolean(this.google) && Boolean(this.map)">
      <slot :google="google" :map="map" />
    </template>
  </div>
</template>
<script>
import GoogleMapsApiLoader from "google-maps-api-loader";

export default {
  props: {
    mapConfig: Object,
    apiKey: String,
    markers: Array
  },

  data() {
    return {
      google: null,
      map: null
    };
  },

  async mounted() {
    const googleMapApi = await GoogleMapsApiLoader({
      apiKey: this.apiKey
    });
    this.google = googleMapApi;
    this.initializeMap();
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

<style scoped lang="sass">
.google-map
  width: 100%
  min-height: 100%
</style>
