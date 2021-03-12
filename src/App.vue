<template>
  <header></header>
  <router-view />
</template>

<script>
import Header from "@/components/header/header";
export default {
  name: "App",
  components: {
    Header
  },
  data() {
    return {};
  }
};
</script>

<style></style>
