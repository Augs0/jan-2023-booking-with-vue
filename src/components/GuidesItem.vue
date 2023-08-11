<style scoped>
.guides-wrapper {
  display: flex;
  flex-direction: column;
  margin: 0 auto;
}

.guide-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom: solid 1px black;
  margin-bottom: 20px;
}

.guide-card h3,
.guide-card p {
  margin: 5px;
}

.card-img {
  width: 50%;
  border-radius: 10px;
}

@media (min-width: 700px) {
  .guides-wrapper {
    display: grid;
    grid-template-columns: 50% 50%;
    margin: 0 auto;
    grid-gap: 20px;
  }
}

@media (prefers-color-scheme: dark) {
  .guide-card {
    border-bottom: solid 1px ghostwhite;
  }
}
</style>

<template>
  <h2 id="guide-title">Guides</h2>
  <div v-if="isLoading">
    <p>Loading tours...</p>
  </div>
  <section v-else aria-labelledby="guide-title" class="guides-wrapper">
    <article
      class="guide-card"
      v-for="guide in guidesStore.guides"
      :key="guide.id"
    >
      <img class="card-img" :src="guide.img" alt="" />
      <h3 class="card-header">{{ guide.name }}</h3>
      <p>Pronouns: {{ guide.pronouns }}</p>
      <p>Speaks: {{ guide.languages }}</p>
      <p @click="viewProfile(guide.id)">View profile</p>
    </article>
  </section>
</template>

<script>
import { useGuidesStore } from "../store/guides";
import { mapState } from "pinia";

export default {
  computer: {
    ...mapState(useGuidesStore, ["isLoading"]),
  },
  setup() {
    const guidesStore = useGuidesStore();

    guidesStore.getGuides();

    return { guidesStore };
  },
  methods: {
    viewProfile(guide_id) {
      this.$router.push({
        name: "single guide",
        params: { guide_id: guide_id },
      });
    },
  },
};
</script>
