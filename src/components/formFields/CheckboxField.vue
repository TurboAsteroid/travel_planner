<template>
  <div class="formItem">
    <div>{{ question.question }}</div>
    <div>{{ question.description }}</div>
    <v-checkbox
      v-model="checked"
      v-for="(option, index) of question.options"
      :label="option"
      :value="index"
      :key="index"
      hide-details
    />
    <v-row>
      <v-checkbox
        v-if="question.addition"
        v-model="addition"
        label="Другое:"
        hide-details
      />
      <v-text-field
        v-if="question.addition"
        v-model="checked"
        :disabled="!addition"
      />
    </v-row>
  </div>
</template>

<script>
export default {
  name: "CheckboxField",
  props: {
    question: {
      type: Object,
      required: true
    }
  },
  data: () => ({
    checked: [],
    addition: false
  }),
  methods: {}
};
</script>
