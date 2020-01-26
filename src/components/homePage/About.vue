<template>
  <div id="mountBottom2Wrapper">
    <v-container id="about">
      <v-row class="pa-3">
        <v-col cols="12" md="6" class="pa-0 d-none d-md-flex">
          <v-container class="pr-12">
            <img id="aboutSvg" :src="require('../../assets/about.svg')" />
          </v-container>
        </v-col>
        <v-col
          cols="12"
          md="6"
          class="pa-0 pl-12 white--text"
          id="conditionsBlockId"
        >
          <v-container class="fill-height align-items-start">
            <v-row class="aboutText">
              <div class="mb-5 headerText">
                <img
                  class="aboutSvgS pa-0 d-md-none"
                  :src="require('../../assets/aboutT.svg')"
                />
                {{ ourOffer.title }}
              </div>
              <div class="regularText" v-html="ourOffer.html" />
              <p class="regularText">
                <a
                  class="black--text font-weight-bold"
                  @click.stop="dialogOpen = true"
                >
                  Остались вопросы? читайте наш
                  <span style="text-decoration: underline">FAQ</span>
                </a>
              </p>
            </v-row>
            <v-row class="aboutText" id="faqBlockId">
              <div class="mb-5 headerText">
                <img
                  class="aboutSvgS pa-0 d-md-none"
                  :src="require('../../assets/aboutB.svg')"
                />
                {{ howItWorks.title }}
              </div>
              <div class="regularText" v-html="howItWorks.html" />
              <p class="regularText">
                <a class="black--text font-weight-bold" @click="openForm()">
                  Заполнить форму вы можете прямо сейчас
                  <v-icon right>mdi-chevron-right-circle</v-icon>
                </a>
              </p>
              <v-dialog v-model="dialogOpen" max-width="50%">
                <v-card>
                  <Faq />
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                      color="green darken-1"
                      text
                      @click="dialogOpen = false"
                    >
                      Продолжить
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </v-row>
          </v-container>
        </v-col>
      </v-row>
    </v-container>
    <v-img id="mountBottom2" :src="require('../../assets/mountBottom2.svg')" />
  </div>
</template>

<script>
import Faq from "@/components/Faq.vue";
export default {
  name: "About",
  components: {
    Faq
  },
  data: () => ({
    dialogOpen: false,
    howItWorks: {},
    ourOffer: {}
  }),
  async mounted() {
    let [howItWorks, ourOffer] = await Promise.all([
      this.$axios.get(this.$store.state.global.host + "module/2"),
      this.$axios.get(this.$store.state.global.host + "module/3")
    ]);
    if (howItWorks.data.status === "ok") {
      this.howItWorks = howItWorks.data.data;
    }
    if (ourOffer.data.status === "ok") {
      this.ourOffer = ourOffer.data.data;
    }
  },
  methods: {
    openForm: function() {
      window.open(this.$store.state.global.formUrl, "_blank");
    }
  }
};
</script>
<style lang="sass">
#about
  padding: 150px 0
  @media screen and (max-width: 1920px)
    padding: 100px 0
  @media (max-width: 1263px)
    padding: 80px 0
  @media (max-width: 960px)
    padding: 70px 0
  @media (max-width: 600px)
    padding: 50px 0
.align-items-start
  align-items: start !important
#aboutSvg
  @media (max-width: 960px)
    display: none
  img
.aboutSvgS
  height: 150px
  vertical-align: middle
#mountBottom2Wrapper
  position: relative
#mountBottom2
  position: absolute
  bottom: 0
  margin-bottom: -4%
  width: 101%
  left: -2px
  max-width: 101%
</style>
