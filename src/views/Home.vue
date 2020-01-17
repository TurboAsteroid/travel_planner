<template>
  <v-app>
    <Header />
    <SimpleForm />
    <About />
    <Prices />
    <Gallery />
    <LinkToForm />
    <Map />
    <Comments />
    <Footer />
  </v-app>
</template>

<script>
import Header from "@/components/Header.vue";
import SimpleForm from "@/components/SimpleForm.vue";
import About from "@/components/About.vue";
import Prices from "@/components/Prices.vue";
import Gallery from "@/components/Gallery.vue";
import LinkToForm from "@/components/LinkToForm.vue";
import Map from "@/components/Map.vue";
import Comments from "@/components/Comments.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "home",
  components: {
    Header,
    SimpleForm,
    About,
    Prices,
    Gallery,
    LinkToForm,
    Map,
    Comments,
    Footer
  },
  data: () => ({}),
};
</script>
