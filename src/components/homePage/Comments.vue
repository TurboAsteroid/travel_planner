<template>
  <v-container class="text-center my-12 pa-12">
    <v-row>
      <v-col class="headerText">
        Отзывы
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        запустить свой счётчик приключений
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
