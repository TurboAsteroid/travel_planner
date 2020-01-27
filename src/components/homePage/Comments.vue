<template v-if="showComments">
  <v-container class="text-center my-12 pa-12" id="commentsBlockId">
    <v-row>
      <v-col class="headerText">
        Отзывы
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-slide-group
          class="pa-4 d-none d-md-flex"
          show-arrows
          prev-icon="mdi-chevron-left-circle"
          next-icon="mdi-chevron-right-circle"
        >
          <v-slide-item v-for="(item, key) in comments" :key="key">
            <v-card color="#e6e6e6" class="ma-4 carouselCard text-left">
              <v-card-subtitle class="black--text">
                <span class="float-right">
                  {{ item.date }}
                </span>
                <span>
                  {{ item.name }}
                </span>
              </v-card-subtitle>
              <v-card-text>
                {{ item.comment }}
              </v-card-text>
            </v-card>
          </v-slide-item>
        </v-slide-group>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="headerText">
        <v-btn
          @click.stop="$store.commit('setDialog', [true, 'dialogComments'])"
          rounded
          color="#000"
          dark
          x-large
          class="buttonBlack"
        >
          Оставить отзыв
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Comments",
  data: () => ({
    comments: [],
    showComments: true
  }),
  async mounted() {
    let result = await this.$axios.get(
      this.$store.state.global.host + "comments"
    );
    if (result.data.status === "ok") {
      this.comments = result.data.data;
      this.showComments = false;
    } else {
      this.showComments = true;
    }
  },
  methods: {}
};
</script>
<style lang="sass">
.carouselCard
  width: 485px
  @media screen and (max-width: 1920px)
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
