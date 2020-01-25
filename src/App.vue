<template>
  <router-view />
</template>

<script>
export default {
  data: () => ({}),
  async mounted() {
    let settings = await this.$axios.get(
      this.$store.state.global.host + "settings"
    );
    if (settings.data.status === "ok") {
      this.$store.commit("setSettings", settings.data.data);
    }
  }
};
</script>
