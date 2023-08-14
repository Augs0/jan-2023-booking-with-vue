<template>
  <header class="header">
    <h1>Welcome to Pansy Tours!</h1>
  </header>
  <img class="home-img" :src="pansy" alt="a purple pansy flower" />
</template>

<style scoped>
.header {
  text-align: center;
}

.home-img {
  margin: 0 auto;
  display: block;
  max-width: 100%;
  border-radius: 70px 150px;
  border: 6px black double;
}

.dark .home-img {
  border: 6px ghostwhite double;
}

@media (min-width: 768px) {
  .home-img {
    max-width: 70%;
  }
}
</style>

<script>
import pansy from "../assets/pansy.avif";

export default {
  data: function () {
    return {
      pansy: pansy,
    };
  },
};
</script>
