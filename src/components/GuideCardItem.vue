<style>
.view-profile-btn {
  padding: 10px;
  font-family: "Tsukimi Rounded", sans-serif;
  margin: 10px;
  cursor: pointer;
}

.view-profile-btn:hover {
  transform: rotate(-1deg) scale(1.1);
}
</style>

<template>
  <img class="card-img" :src="img" alt="" />
  <h3 class="card-header">{{ guideName }}</h3>
  <p>Pronouns: {{ pronouns }}</p>
  <p>Speaks: {{ languages }}</p>
  <button class="view-profile-btn" role="link" @click="viewProfile(id)">
    View {{ guideName }}'s profile
  </button>
</template>

<script>
export default {
  name: "GuideCardItem",
  methods: {
    viewProfile(guide_id) {
      this.$router.push({
        name: "single guide",
        params: { guide_id: guide_id },
      });
    },
  },
  props: ["id", "img", "guideName", "pronouns", "languages"],
};
</script>
