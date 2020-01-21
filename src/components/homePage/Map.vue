<template>
  <TravelMap class="travel-map" />
</template>
<script>
import TravelMap from "../googleMap/TravelMap.vue";

export default {
  name: "Map",
  components: {
    TravelMap
  },
  data: () => ({})
};
</script>
<style lang="sass" scoped>
.travel-map
  height: 400px
</style>
