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
        left: place.left
      }"
    >
      <img :src="images[i]" aspect-ratio="1" />
    </div>
  </v-container>
</template>

<script>
function randomInteger(min, max) {
  // случайное число от min до (max+1)
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}
export default {
  name: "Gallery",
  data: () => ({
    images: [],
    publicPath: process.env.BASE_URL,
    places: [
      {
        top: "30px",
        left: "160px",
        size: "180px"
      },
      {
        top: "210px",
        left: "40px",
        size: "225px"
      },
      {
        top: "325px",
        left: "265px",
        size: "290px"
      },
      {
        top: "615px",
        left: "80px",
        size: "290px"
      },
      {
        top: "45px",
        left: "555px",
        size: "290px"
      },
      {
        top: "330px",
        left: "555px",
        size: "410px"
      },
      {
        top: "735px",
        left: "370px",
        size: "120px"
      },
      {
        top: "735px",
        left: "485px",
        size: "185px"
      },
      {
        top: "735px",
        left: "670px",
        size: "295px"
      },
      {
        top: "145px",
        left: "965px",
        size: "185px"
      },
      {
        top: "330px",
        left: "965px",
        size: "290px"
      },
      {
        top: "615px",
        left: "965px",
        size: "185px"
      },
      {
        top: "45px",
        left: "1150px",
        size: "285px"
      },
      {
        size: "180px",
        top: "330px",
        left: "1255px"
      },
      {
        top: "615px",
        left: "1150px",
        size: "370px"
      }
    ],
    imageCollections: [
      "gallery/1.jpg",
      "gallery/2.jpg",
      "gallery/3.jpg",
      "gallery/4.jpg",
      "gallery/5.jpg",
      "gallery/6.jpg",
      "gallery/7.jpg",
      "gallery/8.jpg",
      "gallery/9.jpg",
      "gallery/10.jpg",
      "gallery/11.jpg",
      "gallery/12.jpg",
      "gallery/13.jpg",
      "gallery/14.jpg",
      "gallery/15.jpg",
      "gallery/16.jpg",
      "gallery/17.jpg",
      "gallery/18.jpg",
      "gallery/19.jpg",
      "gallery/20.jpg"
    ]
  }),
  methods: {
    changeImage: function() {
      this.imageCollections.push(...this.images)
      this.images.push(...this.imageCollections.splice(0, 15))
//      let index = randomInteger(0, this.imageCollections.length)
//      let tmpImage = this.images[index];
//
//      this.images[index] = this.imageCollections.splice(
//        randomInteger(0, this.imageCollections.length),
//        1
//      )[0];
//      this.imageCollections.push(tmpImage);
      setTimeout(() => this.changeImage(), randomInteger(1, 3) * 1000);
    }
  },
  created: function() {
    this.images.push(...this.imageCollections.splice(0, 15))
    setTimeout(() => this.changeImage(), 1000);
  },
};
</script>
<style lang="sass">
#galleryWrap
  position: relative
  margin: 150px auto
  height: 1090px
.imagePlace
  position: absolute
  overflow: hidden
  background: white
  box-shadow: 0 0 19px 7px rgba(0,0,0,0.3)
  img
    width: 100%
    height: 100%


</style>
