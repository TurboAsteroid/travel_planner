<template>
  <v-container class="text-center my-12 pa-12">
    <div class="headerText">
      Настало время
    </div>
    <div>
      запустить свой счётчик приключений
    </div>
    <v-row>
      <v-col class="headerText">
        <v-btn
          rounded
          color="#000"
          dark
          x-large
          class="buttonBlack"
          @click="openForm()"
        >
          Составить маршрут
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "LinkToForm",
  data: () => ({}),
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
