<template>
  <v-container id="PricesBlock">
    <v-row>
      <v-col cols="12" class="headerText" md="6">
        Стоимость
        <br />
        и сроки
      </v-col>
      <v-col cols="12" md="6">
        <v-row class="text-center">
          <v-col cols="12" md="5">
            <span class="headerSmall">1 день</span>
            <br />
            <span class="textMiddle">путешествия</span>
          </v-col>
          <v-col cols="12" md="2" class="headerSmall">
            =
          </v-col>
          <v-col cols="12" md="5">
            <span class="headerSmall">1&nbsp;день*</span>
            <br />
            <span class="textMiddle">планирования</span>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-row class="pa-3 mb-12 pb-12">
      <v-spacer />
      <v-col cols="12" md="6">
        <v-row class="regularText">
          <p>
            Мы всегда стараемся выполнять работу быстрее установленного срока,
            но при этом не хотим жертвовать качеством. Если вам нужнос делать
            план срочно, то ускорение сроков в 2 раза увеличивает общую
            стоимость в 1.5 раза.
          </p>
          <p class="font-italic blue--text">
            * но не более 30 дней в обще сложности
          </p>
        </v-row>
      </v-col>
    </v-row>
    <v-row class="text-center">
      <v-col>
        <span class="headerMiddle">1 день</span>
        <br />
        <span class="textMiddle">путешествия</span>
        <br />
        <span class="textMiddle">1000 рублей</span>
        <br />
        <br />
        <img class="promo" :src="require('../../assets/100x.svg')" />
        <br />
        <span class="headerSmall">
          Первые 100
          <br />
          путешествий
          <br />
          скидка 50%
        </span>
      </v-col>
      <v-col>
        <span class="headerMiddle">14 день</span>
        <br />
        <span class="textMiddle">путешествия</span>
        <br />
        <span class="textMiddle">12000 рублей</span>
        <br />
        <br />
        <img class="promo" :src="require('../../assets/21.svg')" />
        <br />
        <span class="headerSmall">
          От 21 дня
          <br />
          скидка 10%
        </span>
      </v-col>
      <v-col>
        <span class="headerMiddle">21 день</span>
        <br />
        <span class="textMiddle">путешествия</span>
        <br />
        <span class="textMiddle">17000 рублей</span>
        <br />
        <br />
        <img class="promo" :src="require('../../assets/friend.svg')" />
        <br />
        <span class="headerSmall">
          Приведите друга,
          <br />
          получите вместе
          <br />
          скидку 10%
        </span>
      </v-col>
    </v-row>
    <v-row class="text-center mt-12">
      <v-col>
        <span class="regularText">
          Скидки суммируются
        </span>
        <br />
        <a id="smallLink" @click.stop="dialogOpen = true">
          Подробные условия
        </a>
        <v-dialog v-model="dialogOpen" max-width="50%">
          <v-card>
            <Conditions />
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="green darken-1" text @click="dialogOpen = false"
                >Продолжить</v-btn
              >
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Conditions from "@/components/Conditions.vue";
export default {
  name: "Prices",
  components: {
    Conditions
  },
  data: () => ({
    dialogOpen: false
  }),
  computed: {
    formUrl() {
      return this.$store.state.global.formUrl;
    }
  },
  methods: {
    openForm: function() {
      window.open(this.formUrl, "_blank");
    }
  }
};
</script>
<style lang="sass">
#PricesBlock
  padding: 150px 12px
  @media screen and (max-width: 1920px)
    padding: 100px 12px
  @media (max-width: 1263px)
    padding: 80px 12px
  @media (max-width: 960px)
    padding: 70px 12px
  @media (max-width: 600px)
    padding: 50px 12px
#smallLink
  color: #000
  text-decoration: underline
  font-weight: bold
  &:hover
    text-decoration: none
.promo
  height: 300px
  margin-bottom: 30px
  @media screen and (max-width: 1920px)
    height: 300px
  @media (max-width: 1263px)
    height: 300px
  @media (max-width: 960px)
    height: 300px
  @media (max-width: 600px)
    height: 200px
</style>
