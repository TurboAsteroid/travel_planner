<template>
  <div class="formItem">
    <div class="headline">{{ question.question }}</div>
    <div class="headline">{{ question.description }}</div>
  </div>
</template>

<script>
export default {
  name: "SimpleText",
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
