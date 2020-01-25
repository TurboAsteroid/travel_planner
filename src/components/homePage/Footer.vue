<template>
  <v-container class="white--text bold pa-12">
    <v-row>
      <v-col cols="12" md="4" sm="6">
        © 2020 Adventure Counter
      </v-col>
      <v-col id="footerSecond" cols="12" sm="6" md="5">
        +7 333 333 333 3
        <br />
        mail@meil.mail
      </v-col>
      <v-col id="footerThird" cols="12" md="3">
        <v-icon color="white" x-large>mdi-instagram</v-icon>
        <v-icon color="white" x-large>mdi-facebook-box</v-icon>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Footer",
  data: () => ({})
};
</script>
<style lang="sass">
#footerSecond
  text-align: center
  @media (max-width: 960px)
    text-align: right
  @media (max-width: 600px)
    text-align: left
#footerThird
  text-align: right
  @media (max-width: 600px)
    text-align: left
</style>
