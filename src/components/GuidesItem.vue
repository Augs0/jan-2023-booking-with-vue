<style scoped></style>

<template>
  <section>
    <h2>Guides</h2>
    <div v-for="guide in guidesStore.guides" :key="guide.guide_id">
      <article class="guide-card">
        <img
          class="card-img"
          src="https://randomuser.me/api/portraits/lego/8.jpg"
          alt="lego with mustache"
        />
        <h3 class="card-header">{{ guide.name }}</h3>
        <p>
          {{ guide.pronouns }}
        </p>
        <p>{{ guide.languages }}</p>
      </article>
    </div>
  </section>
</template>

<script>
import { useGuidesStore } from "../store/guides";

export default {
  setup() {
    const guidesStore = useGuidesStore();

    guidesStore.getGuides();

    return { guidesStore };
  },
};
</script>
