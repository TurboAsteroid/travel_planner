<template>
  <v-container class="white--text bold pa-12">
    <v-row>
      <v-col cols="12" md="4" sm="6" @click="openForm()">
        {{ $store.state.settings.copyright }}
      </v-col>
      <v-col id="footerSecond" cols="12" sm="6" md="5">
        {{ $store.state.settings.phone }}
        <br />
        {{ $store.state.settings.mail }}
      </v-col>
      <v-col id="footerThird" cols="12" md="3">
        <a :href="$store.state.settings.instagram_link" target="_blank">
          <v-icon color="white" x-large>mdi-instagram</v-icon>
        </a>
        <a :href="$store.state.settings.facebook_link" target="_blank">
          <v-icon color="white" x-large>mdi-facebook-box</v-icon>
        </a>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Footer",
  data: () => ({}),
  methods: {
    openForm: function() {
      this.$store.commit("setDialog", [true, 'dialogProfile'])
    }
  }
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
  a
    text-decoration: none
</style>
