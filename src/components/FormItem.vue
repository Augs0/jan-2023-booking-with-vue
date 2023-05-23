<style scoped>
h2 {
  font-size: 1rem;
}

form {
  display: flex;
  flex-direction: column;
  transform: skewX(5deg);
}

form input,
form select {
  margin: 1rem;
  padding: 20px;
  font-size: 20px;
}

form label {
  background-color: black;
  width: max-content;
  padding: 5px;
  font-size: 1.3rem;
}

div {
  background-color: #c060a1;
  max-width: 80%;
  margin: 1rem auto;
  transform: skewX(-5deg);
}

#booking-btn {
  padding: 10px;
  margin: 10px auto;
  border-radius: 5px;
  background-color: ghostwhite;
  font-size: 16px;
  max-width: fit-content;
  cursor: pointer;
}

@media (min-width: 768px) {
  form {
    transform: skewX(10deg);
  }
  div {
    background-color: #c060a1;
    max-width: 80%;
    margin: 1rem auto;
    transform: skewX(-10deg);
  }
}
</style>

<template>
  <section>
    <h1>Welcome to Pansy Tours!</h1>
    <h2>Book a tour with one of our guides</h2>
    <div>
      <form method="POST" @submit.prevent="submit" @submit="handleSubmit">
        <label for="name">Name</label>
        <input id="name" type="text" v-model="formData.name" />
        <label for="tour">Tour</label>
        <select name="tour" id="tour" v-model="formData.tour">
          <option
            v-for="tour in toursStore.tours"
            :key="tour.tour_id"
            :value="tour.name"
          >
            {{ tour.name }}
          </option>
        </select>
        <label for="guide">Guide</label>
        <select name="guide" id="guide" v-model="formData.guide">
          <option
            v-for="guide in guidesStore.guides"
            :key="guide.guide_id"
            :value="guide.name"
          >
            {{ guide.name }}
          </option>
        </select>
        <button id="booking-btn">Book your tour</button>
      </form>
    </div>
  </section>
</template>

<script>
import { useGuidesStore } from "../store/guides";
import { useToursStore } from "../store/tours";
import { useBookingsStore } from "../store/bookings";
import axios from "axios";

export default {
  setup() {
    const guidesStore = useGuidesStore();
    const toursStore = useToursStore();
    const bookingsStore = useBookingsStore();

    guidesStore.getGuides();
    toursStore.getTours();
    bookingsStore.getBookings();

    return { guidesStore, toursStore, bookingsStore };
  },
  data() {
    return {
      formData: {
        name: "",
        tour: "",
        guide: "",
      },
    };
  },
  methods: {
    async submit() {
      this.$emit("submit", this.form);
    },
    handleSubmit() {
      axios
        .post("https://be-vue-booking.onrender.com/api/bookings", this.formData)
        .then(({ data }) => {
          return data;
        });
    },
  },
};
</script>
