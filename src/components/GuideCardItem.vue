<style></style>

<template>
  <img class="card-img" :src="img" alt="" />
  <h3 class="card-header">{{ guideName }}</h3>
  <p>Pronouns: {{ pronouns }}</p>
  <p>Speaks: {{ languages }}</p>
  <p @click="viewProfile(id)">View profile</p>
</template>

<script>
export default {
  name: "GuideCardITem",
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
