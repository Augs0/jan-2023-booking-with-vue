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

@media (min-width: 700px) {
  .guides-wrapper {
    display: grid;
    grid-template-columns: 50% 50%;
    margin: 0 auto;
    grid-gap: 20px;
  }
}

.dark .guide-card {
  border-bottom: solid 1px ghostwhite;
}
</style>

<template>
  <h2 id="guide-title">Guides</h2>
  <LoadingItem v-if="guidesStore.isLoading" />
  <section v-else aria-labelledby="guide-title" class="guides-wrapper">
    <article
      class="guide-card"
      v-for="guide in guidesStore.guides"
      :key="guide.id"
    >
      <GuideCardItem
        :id="guide.id"
        :img="guide.img"
        :guideName="guide.name"
        :pronouns="guide.pronouns"
        :languages="guide.languages"
      />
    </article>
  </section>
  <BackToTop />
</template>

<script>
import { useGuidesStore } from "../store/guides";
import BackToTop from "./BackToTop.vue";
import GuideCardItem from "./GuideCardItem.vue";
import LoadingItem from "./LoadingItem.vue";

export default {
  components: {
    GuideCardItem,
    LoadingItem,
    BackToTop
},
  setup() {
    const guidesStore = useGuidesStore();

    guidesStore.getGuides();

    return { guidesStore };
  },
};
</script>
