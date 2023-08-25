<style scoped>
.tour-card {
  border: solid 2px black;
  padding: 20px;
  max-width: 100%;
  display: block;
  margin: 0 auto 20px auto;
}
.tours-card-img {
  width: 85%;
  display: block;
  margin: 0 auto;
}

@media (min-width: 768px) {
  .card-header {
    font-size: 35px;
  }
  .tour-card {
    max-width: 60%;
  }
}

.dark .tour-card {
  border: ghostwhite 2px solid;
}
</style>

<template>
  <section id="tours-section">
    <h2>Tours</h2>
    <LoadingItem v-if="toursStore.isLoading" />
    <div v-else v-for="tour in toursStore.tours" :key="tour.tour_id">
      <article class="tour-card">
        <img
          class="tours-card-img"
          :src="`https://source.unsplash.com/random/?${tour.name}&orientation=landscape&content_filter=high`"
          :alt="`views of ${tour.name}`"
        />
        <h3 class="card-header">{{ tour.name }}</h3>
        <p>
          {{ tour.description }}
        </p>
        <p>Max number of people: {{ tour.max_number_of_people }}</p>
        <p>
          Spots remaining:
          {{ tour.max_number_of_people - tour.currently_booked }}
        </p>
        <p>Guide: {{ tour.guide_name }}</p>
      </article>
    </div>
   <BackToTop />
  </section>
</template>

<script>
import { useToursStore } from "../store/tours";
import BackToTop from "./BackToTop.vue";
import LoadingItem from "./LoadingItem.vue";

export default {
  setup() {
    const toursStore = useToursStore();
    toursStore.getTours();
    return { toursStore };
  },
  components: { LoadingItem, BackToTop },
};
</script>
