<template>
  <v-app v-scroll="onScroll">
    <v-app-bar color="transparent" collapse flat fixed dark>
      <v-icon @click.stop="model = !model" x-large v-bind:color="colorI">mdi-dots-vertical-circle-outline</v-icon>
    </v-app-bar>
    <v-navigation-drawer
      v-model="model"
      :temporary="true"
      app
      overflow
      color="rgba(26, 26, 26)"
      dark
    >
      <LeftMenu @closed="closeMenu" @clickMenu="clickMenu" />
    </v-navigation-drawer>
    <template v-for="(item, index) in componentsList">
      <div :id="item" :key="index">
        <component :is="item" />
      </div>
    </template>
  </v-app>
</template>

<script>
import Header from "@/components/homePage/Header.vue";
import SimpleForm from "@/components/homePage/SimpleForm.vue";
import About from "@/components/homePage/About.vue";
import Prices from "@/components/homePage/Prices.vue";
import Gallery from "@/components/homePage/Gallery.vue";
import LinkToForm from "@/components/homePage/LinkToForm.vue";
import Map from "@/components/homePage/Map.vue";
import Comments from "@/components/homePage/Comments.vue";
import Footer from "@/components/homePage/Footer.vue";

import LeftMenu from "@/components/LeftMenu.vue";

export default {
  name: "home",
  dialogOpen: false,
  components: {
    Header,
    SimpleForm,
    About,
    Prices,
    Gallery,
    LinkToForm,
    Map,
    Comments,
    Footer,
    LeftMenu
  },
  data: () => ({
    colorI: "#fff",
    model: null,
    offsetTop: 0,
    componentsList: [
      "Header",
      "SimpleForm",
      "About",
      "Prices",
      "Gallery",
      "LinkToForm",
      "Map",
      "Comments",
      "Footer"
    ]
  }),
  methods: {
    closeMenu: function() {
      this.model = false;
    },
    clickMenu: function (params) {
      if (params.action == 'open') {
        this.model = false;
        window.open(params.place, "_blank");
      } else if (params.action == 'scroll') {
        this.model = false;
        this.$vuetify.goTo(params.place, {})
      }
    },
    onScroll (e) {
      let y1 = document.getElementById('SimpleForm').getBoundingClientRect().y
      let y2 = document.getElementById('Prices').getBoundingClientRect().y
      let y3 = document.getElementById('LinkToForm').getBoundingClientRect().y
      let y4 = document.getElementById('Comments').getBoundingClientRect().y
      let h1 = document.getElementById('SimpleForm').getBoundingClientRect().height
      let h2 = document.getElementById('Prices').getBoundingClientRect().height
      let h3 = document.getElementById('LinkToForm').getBoundingClientRect().height
      let h4 = document.getElementById('Comments').getBoundingClientRect().height

      if (
        (y1 < 0 && y1 + h1 > 0) ||
        (y2 < 0 && y2 + h2 > 0) ||
        (y3 < 0 && y3 + h3 > 0) ||
        (y4 < 0 && y4 + h4 > 0)
      ) {
        this.colorI = "#000"
      } else {
        this.colorI = "#fff"
      }

      this.offsetTop = e.target.scrollTop
    }
  }
};
</script>
<style lang="sass">
@mixin linear-gradient($direction, $fromColor, $toColor)
  background-color: $toColor /* Fallback Color */
  background-image: -webkit-gradient(linear, $direction, from($fromColor), to($toColor)) /* Saf4+, Chrome */
  background-image: -webkit-linear-gradient($direction, $fromColor, $toColor) /* Chrome 10+, Saf5.1+, iOS 5+ */
  background-image:    -moz-linear-gradient($direction, $fromColor, $toColor) /* FF3.6 */
  background-image:     -ms-linear-gradient($direction, $fromColor, $toColor) /* IE10 */
  background-image:      -o-linear-gradient($direction, $fromColor, $toColor) /* Opera 11.10+ */
  background-image:         linear-gradient($direction, $fromColor, $toColor)
  filter: progid:DXImageTransform.Microsoft.gradient(GradientType=1,StartColorStr='#{$fromColor}', EndColorStr='#{$toColor}')
#Header
  background: url("../assets/header.jpg") 50% 0 no-repeat
  background-size: cover
#SimpleForm
  background: #fff
#About
  background-color: rgba(127,186,225,1)
  background: linear-gradient(-170deg, #7fbae1, #478bad 90%, #478bad 100%)
#Prices
  background: #fff
#Gallery
  background: #488cae
#LinkToForm
  background: #fff
#Map
  background: #fff
#Comments
  background: #fff
#Footer
  background: #4c8cac
.regularText
  font-size: 1.7em
  @media screen and (max-width: 1903px)
    font-size: 1em
  @media (max-width: 1263px)
    font-size: 0.75em
  @media (max-width: 960px)
    font-size: 1em
  @media (max-width: 600px)
    font-size: 0.9em
.headerText
  font-weight: bold
  font-size: 5em
  line-height: 1.2em
  @media screen and (max-width: 1903px)
    font-size: 4em
  @media (max-width: 1263px)
    font-size: 3em
  @media (max-width: 960px)
    font-size: 4em
  @media (max-width: 600px)
    font-size: 3em
.headerMiddle
  font-weight: bold
  font-size: 3.75em
  line-height: 1.2em
  @media screen and (max-width: 1903px)
    font-size: 3em
  @media (max-width: 1263px)
    font-size: 2.25em
  @media (max-width: 960px)
    font-size: 3em
  @media (max-width: 600px)
    font-size: 2.25em
.headerSmall
  font-weight: bold
  font-size: 2em
  line-height: 1.2em
  @media screen and (max-width: 1903px)
    font-size: 1.8em
  @media (max-width: 1263px)
    font-size: 1.5em
  @media (max-width: 960px)
    font-size: 1.8em
  @media (max-width: 600px)
    font-size: 1.5em
.textMiddle
  font-size: 2.5em
  line-height: 1.2em
  @media screen and (max-width: 1903px)
    font-size: 2em
  @media (max-width: 1263px)
    font-size: 1.5em
  @media (max-width: 960px)
    font-size: 2em
  @media (max-width: 600px)
    font-size: 1.5em
.buttonBlack
  text-transform: none !important
  font-weight: bold
</style>
