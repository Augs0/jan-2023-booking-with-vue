<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/book">Book a tour</RouterLink>
    <RouterLink to="/tours">See our tours</RouterLink>
    <RouterLink to="/guides">Meet our guides</RouterLink>
  </nav>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

nav {
  width: 100%;
  font-size: 1.5rem;
  text-align: center;
  margin-top: 2rem;
}

nav a {
  color: var(--text-colour);
  border-left: 5px solid transparent;
}

nav a.router-link-exact-active {
  border-left: 5px solid var(--border-colour);
  background: linear-gradient(var(--border-colour), ghostwhite);
  color: var(--active-text);
}

nav a {
  display: inline-block;
  padding: 0 1rem;
}
</style>
