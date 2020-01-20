<template>
  <v-container class="text-center my-12 pa-12">
    <v-row>
      <v-col class="headerText">
        Отзывы
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-carousel hide-delimiters class="d-md-none" height="300">
          <v-carousel-item v-for="n in 15" :key="n">
            <v-card color="#e6e6e6" class="ma-4 carouselCard text-left">
              <v-card-subtitle class="black--text">
                <span class="float-right">01.01.0001</span>
                <span>Добрый жук</span>
              </v-card-subtitle>
              <v-card-text class="black--text">
                Выражаю благодарность менеджеру Марии. Являюсь вашим клиентом и
                всегда встречаю радушие, понимание и отзывчивость! Благодарю за
                отличную работу и ту радость, что вы нам дарите, отправляя нас в
                путешествия!
              </v-card-text>
            </v-card>
          </v-carousel-item>
        </v-carousel>

        <v-slide-group
          class="pa-4 d-none d-md-flex"
          show-arrows
          prev-icon="mdi-chevron-left-circle"
          next-icon="mdi-chevron-right-circle"
        >
          <v-slide-item v-for="n in 15" :key="n">
            <v-card color="#e6e6e6" class="ma-4 carouselCard text-left">
              <v-card-subtitle class="black--text">
                <span class="float-right">01.01.0001</span>
                <span>Добрый жук</span>
              </v-card-subtitle>
              <v-card-text>
                Выражаю благодарность менеджеру Марии. Являюсь вашим клиентом и
                всегда встречаю радушие, понимание и отзывчивость! Благодарю за
                отличную работу и ту радость, что вы нам дарите, отправляя нас в
                путешествия!
              </v-card-text>
            </v-card>
          </v-slide-item>
        </v-slide-group>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="headerText">
        <v-btn rounded color="#000" dark x-large class="buttonBlack">
          Оставить отзыв
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Comments",
  data: () => ({})
};
</script>
<style lang="sass">
.carouselCard
  width: 485px
  @media screen and (max-width: 1904px)
    width: 290px
  @media (max-width: 1263px)
    width: 305px
  @media (max-width: 960px)
    width: auto
    height: 280px
  @media (max-width: 600px)
    width: auto
    height: 280px
</style>
