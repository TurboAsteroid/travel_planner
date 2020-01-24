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
                Как это работает?
              </div>
              <p class="regularText">
                Мы - команда “бывалых” путешественников, знаем и пробовали все
                виды туризма от пассивного отдыха на пляжах пятизвездочных
                отелей Турции до активных путешествий с рюкзаками по суровой
                Норвегии. К тому же мы не боимся новых ещё неизведанных мест и с
                удовольствием открываем новые направления. Мы любим быть
                дотошными и планировать всё максимально точно, с заботой о вашем
                времени и кошельке, ведь мы знаем как мало в году отпускных дней
                и сколько стоит каждый день путешествия. Именно поэтому мы
                планируем Ваши путешествия “как для себя”, даём максимально
                точные указания, максимально полезные советы и стараемся выжать
                максимум из каждого дня и каждого потраченного рубля.
              </p>
              <p class="regularText">
                Мы поможем Вам создать идеальное путешествие в соответствии со
                всеми вашими запросами, планами, мечтами и возможностями!
              </p>
              <p>
                <a class="regularText" @click="openForm()">
                  Заполнить форму вы можете прямо сейчас
                  <v-icon right>mdi-chevron-right-circle</v-icon>
                </a>
              </p>
            </v-row>
            <v-row class="aboutText" id="faqBlockId">
              <div class="mb-5 headerText">
                <img
                  class="aboutSvgS pa-0 d-md-none"
                  :src="require('../../assets/aboutB.svg')"
                />
                Как это работает?
              </div>
              <p class="regularText">
                Мы - команда “бывалых” путешественников, знаем и пробовали все
                виды туризма от пассивного отдыха на пляжах пятизвездочных
                отелей Турции до активных путешествий с рюкзаками по суровой
                Норвегии. К тому же мы не боимся новых ещё неизведанных мест и с
                удовольствием открываем новые направления. Мы любим быть
                дотошными и планировать всё максимально точно, с заботой о вашем
                времени и кошельке, ведь мы знаем как мало в году отпускных дней
                и сколько стоит каждый день путешествия. Именно поэтому мы
                планируем Ваши путешествия “как для себя”, даём максимально
                точные указания, максимально полезные советы и стараемся выжать
                максимум из каждого дня и каждого потраченного рубля.
              </p>
              <p class="regularText">
                Мы поможем Вам создать идеальное путешествие в соответствии со
                всеми вашими запросами, планами, мечтами и возможностями!
              </p>
              <p>
                <a class="regularText" @click.stop="dialogOpen = true">
                  Остались вопросы? читайте наш
                  <span style="text-decoration: underline">FAQ</span>
                </a>
                <v-dialog v-model="dialogOpen" max-width="50%">
                  <v-card>
                    <Faq />
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn
                        color="green darken-1"
                        text
                        @click="dialogOpen = false"
                        >Продолжить</v-btn
                      >
                    </v-card-actions>
                  </v-card>
                </v-dialog>
              </p>
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
    dialogOpen: false
  }),
  methods: {
    openForm: function() {
      window.open(this.$store.state.global.formUrl, "_blank");
    }
  },
};
</script>
<style lang="sass">
#about
  padding: 150px 0
  @media screen and (max-width: 1904px)
    padding: 100px 0
  @media (max-width: 1263px)
    padding: 80px 0
  @media (max-width: 960px)
    padding: 70px 0
  @media (max-width: 600px)
    padding: 50px 0
.align-items-start
  align-items: start !important
.v-application a.regularText
  color: #000
  font-weight: bold
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
