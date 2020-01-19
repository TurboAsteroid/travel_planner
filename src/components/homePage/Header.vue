<template>
  <v-container>
    <v-layout>
      <v-img id="logo" :src="require('../../assets/logo.svg')" contain />
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "HelloWorld",
  data: () => ({})
};
</script>
<style>
#logo {
  max-height: 555px;
}
</style>
