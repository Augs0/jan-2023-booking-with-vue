<template>
  <div class="btn-container">
    <button class="back-btn" @click="goBack()">Back a page</button>
    <button class="back-btn" @click="goBackHome()">Back home</button>
  </div>
</template>

<script>
export default {
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    goBackHome() {
      this.$router.push({
        name: "home",
      });
    },
  },
};
</script>

<style scoped>
.btn-container {
  display: flex;
}

.back-btn {
  padding: 10px;
  border-radius: 7px;
  font-family: "Tsukimi Rounded", sans-serif;
  margin: 10px;
  display: block;
  cursor: pointer;
}
</style>
