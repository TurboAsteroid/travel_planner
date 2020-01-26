<template v-if="showGallery">
  <v-container id="galleryWrap">
    <div
      v-for="i in [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]"
      class="imagePlace"
      :id="'imagePlace_' + i"
      v-bind:key="i"
    >
      <transition name="fade" mode="out-in">
        <div v-if="!imagesHide[i]" class="imageWrap">
          <v-img :src="images[0][i]" aspect-ratio="1" />
        </div>
        <div v-else :key="i" class="imageWrap">
          <v-img
            v-bind:v-show="!imagesHide[i]"
            :src="images[1][i]"
            aspect-ratio="1"
          />
        </div>
      </transition>
    </div>
  </v-container>
</template>

<script>
import Vue from "vue";

function randomInteger(min, max) {
  let rand = min + Math.random() * (max - min);
  return Math.floor(rand);
}
export default {
  name: "Gallery",
  data: () => ({
    showGallery: false,
    images: [[], []],
    imagesHide: [],
    publicPath: process.env.BASE_URL,
    tmpArray: [],
    imageCollections: []
  }),
  async mounted() {
    let gallery = await this.$axios.get(
      this.$store.state.global.host + "gallery"
    );
    if (gallery.data.status === "ok") {
      this.imageCollections = gallery.data.gallery;
      this.showGallery = true;
      this.images[0].push(...this.imageCollections.splice(0, 15));
      setTimeout(() => this.changeImage(), 1000);
    } else {
      this.showGallery = false;
    }
  },
  methods: {
    changeImage: function() {
      let index = randomInteger(0, this.images[0].length);
      let currentState = this.imagesHide[index] || 0;
      this.imageCollections.push(this.images[currentState][index]);
      Vue.set(
        this.images[currentState ? 0 : 1],
        index,
        this.imageCollections.splice(
          randomInteger(0, this.imageCollections.length),
          1
        )[0]
      );
      Vue.set(this.imagesHide, index, currentState ? 0 : 1);
      setTimeout(() => this.changeImage(), 1000);
    }
  }
};
</script>
<style lang="sass">
#galleryWrap
  position: relative
  margin: 150px auto
  height: 1090px
  @media (max-width: 1263px)
    height: 670px
.imagePlace
  position: absolute
  left: 50%
  transition: all .8s
  .imageWrap
    box-shadow: 0 0 19px 7px rgba(0,0,0,0.3)
#imagePlace_0
  top: 30px
  margin-left: -620px
  width: 180px
  @media screen and (max-width: 1920px)
    margin-left: -630px
  @media (max-width: 1263px)
    width: 120px
    margin-left: -495px
#imagePlace_1
  top: 210px
  margin-left: -740px
  width: 225px
  @media screen and (max-width: 1920px)
    top: 100px
    margin-left: -450px
  @media (max-width: 1263px)
    width: 150px
    top: 75px
    margin-left: -375px
#imagePlace_2
  top: 325px
  margin-left: -515px
  width: 290px
  @media (max-width: 1263px)
    top: 225px
    width: 200px
#imagePlace_3
  top: 615px
  margin-left: -705px
  width: 290px
  @media screen and (max-width: 1920px)
    margin-left: -635px
  @media (max-width: 1263px)
    width: 190px
    top: 425px
    margin-left: -460px
#imagePlace_4
  top: 35px
  margin-left: -225px
  width: 290px
  @media (max-width: 1263px)
    width: 190px
    top: -35px
#imagePlace_5
  top: 325px
  margin-left: -225px
  width: 410px
  @media (max-width: 1263px)
    width: 270px
    top: 155px
#imagePlace_6
  top: 735px
  margin-left: -415px
  width: 120px
  @media screen and (max-width: 1920px)
    top: 615px
    margin-left: -345px
  @media (max-width: 1263px)
    top: 280px
    margin-left: -315px
    width: 90px
#imagePlace_7
  top: 735px
  margin-left: -295px
  width: 185px
  @media (max-width: 1263px)
    top: 525px
    margin-left: -210px
    width: 125px
#imagePlace_8
  top: 735px
  margin-left: -110px
  width: 295px
  @media (max-width: 1263px)
    width: 190px
    top: 425px
    margin-left: -85px
#imagePlace_9
  top: 140px
  margin-left: 185px
  width: 185px
  height: 185px
  @media screen and (max-width: 1920px)
    margin-left: 65px
  @media (max-width: 1263px)
    width: 120px
    top: 35px
    margin-left: 45px
#imagePlace_10
  top: 325px
  margin-left: 185px
  width: 290px
  @media (max-width: 1263px)
    width: 190px
    top: 155px
    margin-left: 45px
#imagePlace_11
  top: 615px
  margin-left: 185px
  width: 185px
  @media (max-width: 1263px)
    width: 120px
    top: 345px
    margin-left: 115px
#imagePlace_12
  top: 40px
  margin-left: 370px
  width: 285px
  @media screen and (max-width: 1920px)
    margin-left: 250px
  @media (max-width: 1263px)
    width: 190px
    margin-left: 235px
#imagePlace_13
  top: 325px
  margin-left: 475px
  width: 180px
  @media (max-width: 1263px)
    width: 120px
    margin-left: 235px
    top: 270px
#imagePlace_14
  top: 615px
  margin-left: 370px
  width: 370px
  @media (max-width: 1263px)
    width: 245px
    top: 390px
    margin-left: 235px
.fade-enter-active
  transition: all .5s cubic-bezier(0.55, 0.085, 0.68, 0.53)
.fade-leave-active
  transition: all .5s cubic-bezier(0.25, 0.46, 0.45, 0.94)
.fade-enter, .fade-leave-to
  opacity: 0
</style>
