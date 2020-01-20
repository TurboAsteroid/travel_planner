<template>
  <v-container id="headerWraper">
    <v-layout>
      <img id="logo" :src="require('../../assets/logo.svg')" />
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    name: "Header",
    data: () => ({})
  };
</script>
<style lang="sass">
#headerWraper
  padding: 150px 0 130px
  @media screen and (max-width: 1904px)
    padding: 100px 0 90px
  @media (max-width: 1263px)
    padding: 80px 0 60px
  @media (max-width: 960px)
    padding: 30px 0 40px
  @media (max-width: 600px)
    padding: 20px 0 30px
#logo
  width: 500px
  margin: 0 auto
  @media screen and (max-width: 1904px)
    width: 350px
  @media (max-width: 1263px)
    width: 250px
  @media (max-width: 960px)
    width: 200px
  @media (max-width: 584px)
    width: 160px
</style>