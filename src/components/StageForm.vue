<template>
  <div>
    <div class="headline">{{ stage.name }}</div>
    <div class="headline">{{ stage.description }}</div>
    <v-form ref="form" v-model="validate">
      <component
        :is="question.type"
        v-for="(question, index) in stage.questions"
        :key="index"
        :question="question"
      />
    </v-form>

    <v-btn v-if="!first" color="warning" @click="prevStep(n)">
      Назад
    </v-btn>
    <v-btn v-if="!last" color="primary" @click="nextStep(n)">
      Дальше
    </v-btn>
    <v-btn v-else color="primary" @click="sendForm(n)">
      Отправить
    </v-btn>
    <v-btn @click.stop="closeDialog">Отмена</v-btn>
  </div>
</template>

<script>
import SimpleText from "./formFields/SimpleText";
import TextField from "./formFields/TextField";
import CheckboxField from "./formFields/CheckboxField";
export default {
  name: "StageForm",
  components: {
    SimpleText,
    TextField,
    CheckboxField
  },
  props: {
    stage: {
      type: Object,
      required: true
    },
    first: {
      type: Boolean,
      required: false
    },
    last: {
      type: Boolean,
      required: false
    }
  },
  data: () => ({
    validate: false
  }),
  methods: {
    closeDialog() {
      this.$emit("close");
    },
    nextStep() {
      if (this.$refs.form.validate()) {
        this.$emit("next");
      }
    },
    prevStep() {
      this.$emit("prev");
    },
    sendForm() {
      this.$emit("prev");
    }
  }
};
</script>
