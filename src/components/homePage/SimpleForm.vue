<template>
  <div id="mountWrapper">
    <v-img id="mountTop" :src="require('../../assets/mountTop.svg')" />
    <v-container>
      <v-layout row class="pa-3">
        <v-text-field
          label="Куда вы хотите отправиться?"
          rounded
          filled
          xs="12"
        />
        <v-btn
          id="findCountry"
          rounded
          color="#000"
          dark
          x-large
          xs="12"
          class="buttonBlack"
          @click="openForm()"
        >
          Составить маршрут
        </v-btn>
      </v-layout>
    </v-container>
    <v-img id="mountBottom" :src="require('../../assets/mountBottom.svg')" />
  </div>
</template>

<script>
export default {
  name: "SimpleForm",
  data: () => ({}),
  methods:{
    openForm: function () {
      window.open('http://bit.ly/yourtravelplanner', '_blank');
    }
  }
};
</script>
<style lang="sass">
#mountWrapper
  position: relative
  padding: 12*4px 0
  @media screen and (max-width: 1904px)
    padding: 10*4px 0
  @media (max-width: 1263px)
    padding: 8*4px 0
  @media (max-width: 960px)
    padding: 6*4px 0
  @media (max-width: 600px)
    padding: 4*4px 0
#mountTop, #mountBottom
  position: absolute
  width: 101%
  left: -2px
  max-width: 101%
#mountTop
  top: 0
  margin-top: -8.5%
#mountBottom
  bottom: 0
  margin-bottom: -9%
#findCountry
  margin-left: 12*4px
  @media (max-width: 536px)
    margin-left: 0
    margin: 0 auto
</style>
