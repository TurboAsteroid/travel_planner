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
                {{ item.description }}
              </v-card-text>
            </v-card>
          </v-slide-item>
        </v-slide-group>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="headerText">
        <v-btn
          @click.stop="dialogOpen = true"
          rounded
          color="#000"
          dark
          x-large
          class="buttonBlack"
        >
          Оставить отзыв
        </v-btn>
        <v-dialog v-model="dialogOpen" persistent max-width="50%">
          <v-card>
            <CommentForm @closed="onCloseChild" />
          </v-card>
        </v-dialog>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import CommentForm from "@/components/CommentForm.vue";
export default {
  name: "Comments",
  components: {
    CommentForm
  },
  data: () => ({
    dialogOpen: false,
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
  methods: {
    openForm: function() {
      window.open(this.$store.state.global.formUrl, "_blank");
    },
    onCloseChild: function(value) {
      console.log("valuevaluevalue", value); // someValue
      this.dialogOpen = false;
    }
  }
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
