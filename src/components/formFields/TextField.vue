<template>
  <div class="formItem">
    <v-text-field
      :label="question.question"
      :hint="question.description"
      :required="question.required"
    />
  </div>
</template>

<script>
export default {
  name: "TextField",
  props: {
    question: {
      type: Object,
      required: true
    }
  },
  data: () => ({}),
  methods: {}
};
</script>
