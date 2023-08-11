<style scoped></style>

<template>
  <h2 id="guide-title">{{ guidesStore.guide.name }}</h2>
  <section>
    <img :src="guidesStore.guide.img" alt="">
    <p>Speaks: {{ guidesStore.guide.languages  }}</p>
    <p>Pronouns: {{ guidesStore.guide.pronouns }}</p>
    <h3>About {{ guidesStore.guide.name }}</h3>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, dolores?</p>
  </section>
</template>

<script>
import { useRoute } from "vue-router";
import { useGuidesStore } from "../store/guides";

export default {
  setup() {
    const route = useRoute();
    const guide_id = route.params.guide_id;

    const guidesStore = useGuidesStore();
    guidesStore.getSingleGuide(guide_id);

    return { guidesStore };
  },
};
</script>
