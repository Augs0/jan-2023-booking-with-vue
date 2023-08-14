<script setup>
import { RouterLink, RouterView } from "vue-router";
import { useDark, useToggle } from "@vueuse/core";

const isDark = useDark();
const toggleMode = useToggle(isDark);
</script>

<template>
  <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/book">Book a tour</RouterLink>
    <RouterLink to="/tours">See our tours</RouterLink>
    <RouterLink to="/guides">Meet our guides</RouterLink>
  </nav>
  <button id="toggleBtn" @click="toggleMode()">
    {{ isDark ? "Switch to light mode" : "Switch to dark mode" }}
  </button>

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
  text-decoration: none;
}

nav a.router-link-exact-active {
  border-bottom: 5px solid black;
  color: var(--active-text);
}

nav a {
  display: inline-block;
  padding: 0 1rem;
}

#toggleBtn {
  padding: 10px;
  border-radius: 7px;
  font-family: "Tsukimi Rounded", sans-serif;
  margin: 10px auto;
  display: block;
  cursor: pointer;
}

.dark nav a.router-link-exact-active {
  border-bottom: 5px solid white;
}
</style>
