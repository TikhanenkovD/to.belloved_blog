<template>
  <header class="header">
    <img src="" alt="main-logo" class="header__logo" />
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
