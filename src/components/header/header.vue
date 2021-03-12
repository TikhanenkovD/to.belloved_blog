<template>
  <header class="header">
    <h1 class="header__logo">to.belloved</h1>
    <nav>
      <router-link to="/home">Home</router-link>
      <router-link to="/home">About</router-link>
    </nav>
  </header>
</template>

<script>
export default {
  name: "header"
};
</script>

<style scoped lang="scss" src="./header.scss" />
