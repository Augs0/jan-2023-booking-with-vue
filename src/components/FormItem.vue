<style scoped>
h1 {
  font-size: 2rem;
}

form {
  display: flex;
  flex-direction: column;
  margin: 20px;
}

form input,
form select {
  padding: 20px;
  font-size: 1.2rem;
}

form label {
  width: max-content;
  padding: 5px;
  font-size: 1.3rem;
}

div {
  background-color: ghostwhite;
  border-radius: 20px;
  margin: 1rem auto;
  color: black;
}

#booking-btn {
  padding: 15px;
  margin: 10px auto;
  border-radius: 5px;
  background-color: #cc8dd4;
  font-size: 18px;
  max-width: fit-content;
  cursor: pointer;
}

@media (min-width: 768px) {
  div {
    max-width: 80%;
    margin: 1rem auto;
  }
}

@media (prefers-color-scheme: dark) {
  div {
    background-color: #1f1720;
    color: ghostwhite;
  }
  form input,
  form select {
    background-color: #342c35;
    color: ghostwhite;
  }
  #booking-btn {
    background-color: #1f1720;
    color: ghostwhite;
    border: ghostwhite 1px solid;
  }
}
</style>

<template>
  <section>
    <h1>Welcome to Pansy Tours!</h1>
    <h2>Book a tour with one of our guides</h2>
    <div>
      <form
        ref="bookingForm"
        method="POST"
        @submit.prevent="submit"
        @submit="handleSubmit"
      >
        <label for="name">Name</label>
        <input
          id="name"
          type="text"
          v-model="formData.name"
          autocomplete="given-name"
        />
        <label for="tour">Tour</label>
        <select
          name="tour"
          id="tour"
          v-model="formData.tour"
          value="Please select a tour"
        >
          <option value="Please select a tour">Please select a tour</option>
          <option
            v-for="tour in toursStore.tours"
            :key="tour.tour_id"
            :value="tour.name"
          >
            {{ tour.name }}
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
      },
    };
  },
  methods: {
    // async submit() {
    //   this.$emit("submit", this.form);
    // },
    handleSubmit() {
      axios
        .post("https://be-vue-booking.onrender.com/api/bookings", {
          guest: this.formData.name,
          tour_name: this.formData.tour,
        })
        .then(({ data }) => {
          return data;
        })
        .then(() => {
          this.$refs.bookingForm.reset();
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
