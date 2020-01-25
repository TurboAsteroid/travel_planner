<template>
  <v-card>
    <v-card-title>
      <span class="headline">Оставь свой отзыв</span>
    </v-card-title>
    <v-card-text>
      <v-form ref="form" v-model="valid" lazy-validation>
        <v-row>
          <v-col cols="12">
            <v-text-field
              label="Ваше имя*"
              required
              v-model="name"
              :rules="[v => !!v || 'Поле Имя обазательно для заполнения']"
            />
          </v-col>
          <v-col cols="12">
            <v-textarea
              v-model="comment"
              auto-grow
              outlined
              :rules="[
                v => !!v || 'Поле Комментарий обазательно для заполнения'
              ]"
              label="Ваш комментарий"
            ></v-textarea>
          </v-col>
        </v-row>
      </v-form>
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="blue darken-1" text @click="onClickButton()">Закрыть</v-btn>
      <v-btn color="blue darken-1" text @click="onClickButton(true)">
        Отправить
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "Conditions",
  data: () => ({
    name: "",
    comment: "",
    valid: true
  }),
  methods: {
    onClickButton(params) {
      if (!params || this.$refs.form.validate()) {
        this.$emit(
          "closed",
          params ? { name: this.name, comment: this.comment } : []
        );
        this.$refs.form.reset();
        this.$refs.form.resetValidation();
      }
    }
  }
};
</script>
