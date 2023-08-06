<style scoped>
.tour-card {
  border: solid 2px black;
  padding: 20px;
  margin-bottom: 20px;
}
.card-img {
  width: 100%;
}

@media (min-width: 768px) {
  .card-img {
    width: 35%;
  }
  .card-header {
    font-size: 30px;
  }
}

@media (prefers-color-scheme: dark) {
  .tour-card {
    border: ghostwhite 2px solid;
  }
}
</style>

<template>
  <section>
    <h2>Tours</h2>
    <div v-for="tour in toursStore.tours" :key="tour.tour_id">
      <article class="tour-card">
        <img
          class="card-img"
          src="https://randomuser.me/api/portraits/lego/8.jpg"
          alt="lego with mustache"
        />
        <h3 class="card-header">{{ tour.name }}</h3>
        <p>
          {{ tour.description }}
        </p>
        <p>Max number of people: {{ tour.max_number_of_people }}</p>
        <p>Guide: {{ tour.guide_name }}</p>
      </article>
    </div>
  </section>
</template>

<script>
import { useToursStore } from "../store/tours";

export default {
  setup() {
    const toursStore = useToursStore();

    toursStore.getTours();

    return { toursStore };
  },
};
</script>
