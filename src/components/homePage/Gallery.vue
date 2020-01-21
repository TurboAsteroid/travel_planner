<template>
  <v-container id="galleryWrap">
    <div
      v-for="(place, i) in places"
      class="imagePlace"
      :id="'imagePlace_' + i"
      v-bind:key="i"
      v-bind:style="{
        width: place.size,
        height: place.size,
        top: place.top,
        marginLeft: place.left
      }"
    >
      <transition name="fade" mode="out-in">
        <div v-if="!imagesHide[i]" class="imageWrap">
          <v-img
            :src="images[0][i]"
            aspect-ratio="1"
          />
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
    images: [[], []],
    imagesHide: [],
    publicPath: process.env.BASE_URL,
    places: [
      {
        top: "30px",
        left: "-620px",
        size: "180px"
      },
      {
        top: "210px",
        left: "-740px",
        size: "225px"
      },
      {
        top: "325px",
        left: "-515px",
        size: "290px"
      },
      {
        top: "615px",
        left: "-705px",
        size: "290px"
      },
      {
        top: "35px",
        left: "-225px",
        size: "290px"
      },
      {
        top: "325px",
        left: "-225px",
        size: "410px"
      },
      {
        top: "735px",
        left: "-415px",
        size: "120px"
      },
      {
        top: "735px",
        left: "-295px",
        size: "185px"
      },
      {
        top: "735px",
        left: "-110px",
        size: "295px"
      },
      {
        top: "140px",
        left: "185px",
        size: "185px"
      },
      {
        top: "325px",
        left: "185px",
        size: "290px"
      },
      {
        top: "615px",
        left: "185px",
        size: "185px"
      },
      {
        top: "40px",
        left: "370px",
        size: "285px"
      },
      {
        size: "180px",
        left: "475px",
        top: "325px"
      },
      {
        top: "615px",
        left: "370px",
        size: "370px"
      }
    ],
    imageCollections: [
      "https://i.picsum.photos/id/1/500/500.jpg",
      "https://i.picsum.photos/id/2/500/500.jpg",
      "https://i.picsum.photos/id/3/500/500.jpg",
      "https://i.picsum.photos/id/4/500/500.jpg",
      "https://i.picsum.photos/id/5/500/500.jpg",
      "https://i.picsum.photos/id/6/500/500.jpg",
      "https://i.picsum.photos/id/7/500/500.jpg",
      "https://i.picsum.photos/id/8/500/500.jpg",
      "https://i.picsum.photos/id/9/500/500.jpg",
      "https://i.picsum.photos/id/10/500/500.jpg",
      "https://i.picsum.photos/id/11/500/500.jpg",
      "https://i.picsum.photos/id/12/500/500.jpg",
      "https://i.picsum.photos/id/13/500/500.jpg",
      "https://i.picsum.photos/id/14/500/500.jpg",
      "https://i.picsum.photos/id/15/500/500.jpg",
      "https://i.picsum.photos/id/16/500/500.jpg",
      "https://i.picsum.photos/id/17/500/500.jpg",
      "https://i.picsum.photos/id/18/500/500.jpg",
      "https://i.picsum.photos/id/19/500/500.jpg",
      "https://i.picsum.photos/id/20/500/500.jpg",
      "https://i.picsum.photos/id/21/500/500.jpg",
      "https://i.picsum.photos/id/22/500/500.jpg",
      "https://i.picsum.photos/id/23/500/500.jpg",
      "https://i.picsum.photos/id/24/500/500.jpg",
      "https://i.picsum.photos/id/25/500/500.jpg",
      "https://i.picsum.photos/id/26/500/500.jpg"
    ],
    tmpArray: []
  }),
  methods: {
    changeImage: function() {
      let index = randomInteger(0, this.images[0].length);
      let currentState = this.imagesHide[index] || 0
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
  },
  created: function() {
    this.images[0].push(...this.imageCollections.splice(0, 15));
    setTimeout(() => this.changeImage(), 1000);
  }
};
</script>
<style lang="sass">
#galleryWrap
  position: relative
  margin: 150px auto
  height: 1090px
.imagePlace
  position: absolute
  left: 50%
  .imageWrap
    box-shadow: 0 0 19px 7px rgba(0,0,0,0.3)
.fade-enter-active
  transition: all .5s cubic-bezier(0.55, 0.085, 0.68, 0.53)
.fade-leave-active
  transition: all .5s cubic-bezier(0.25, 0.46, 0.45, 0.94)
.fade-enter, .fade-leave-to
  opacity: 0
</style>
