<template>
  <v-container id="PricesBlock">
    <v-row>
      <v-col class="headerText">
        Стоимость
        <br />
        и сроки
      </v-col>
      <v-col>
        <v-row class="text-center">
          <v-col>
            <span class="headerSmall">1 день</span>
            <br />
            <span class="textMiddle">путешествия</span>
          </v-col>
          <v-col class="headerSmall">
            =
          </v-col>
          <v-col>
            <span class="headerSmall">1 день*</span>
            <br />
            <span class="textMiddle">планирования</span>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-row class="mb-12 pb-12">
      <v-spacer />
      <v-col>
        <v-row class="regularText">
          Мы всегда стараемся выполнять работу быстрее установленного срока, но при этом не хотим жертвовать качеством.
          Если вам нужнос делать план срочно, то ускорение сроков в 2 раза увеличивает общую стоимость в 1.5 раза.
          <br />
          <br />
          <span style="font-style: italic; color:#3b57d4">* но не более 30 дней в обще сложности</span>
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
        <span  class="regularText">
          Скидки суммируются
        </span>
        <br />
        <a id="smallLink">
          Подробные условия
        </a>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Prices",
  data: () => ({})
};
</script>
<style lang="sass">
#PricesBlock
  padding: 150px 0
  @media screen and (max-width: 1904px)
    padding: 100px 0
  @media (max-width: 1263px)
    padding: 80px 0
  @media (max-width: 960px)
    padding: 70px 0
  @media (max-width: 600px)
    padding: 50px 0
#smallLink
  color: #000
  text-decoration: underline
  font-weight: bold
  &:hover
    text-decoration: none
.promo
  height: 300px
  margin-bottom: 30px

</style>