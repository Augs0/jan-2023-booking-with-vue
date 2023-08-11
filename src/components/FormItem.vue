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
  font-family: "Tsukimi Rounded", sans-serif;
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
  padding: 20px;
}

.alert {
  text-align: center;
  margin: 5px;
}

.err {
  background-color: rgb(249, 124, 124);
  color: black;
}

.success {
  background-color: rgb(170, 248, 170);
  color: black;
}

#booking-btn {
  padding: 15px;
  margin: 10px auto;
  border-radius: 5px;
  background-color: #bc3e9f;
  color: ghostwhite;
  font-family: "Tsukimi Rounded", sans-serif;
  font-size: 18px;
  max-width: fit-content;
  cursor: pointer;
}

#booking-btn:hover {
  background-color: var(--text-colour);
  color: var(--bg-colour);
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
    <h1>Book a tour with one of our guides</h1>
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
          required
        />
        <label for="tour">Tour</label>
        <select
          name="tour"
          id="tour"
          v-model="formData.tour"
          value="Please select a tour"
          required
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
      <p class="alert" ref="alert" role="alert">
        {{ alertMsg }}
      </p>
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
      tourFull: false,
      alertMsg: "",
    };
  },
  methods: {
    handleSubmit() {
      axios
        .post("https://be-vue-booking.onrender.com/api/bookings", {
          guest: this.formData.name,
          tour_name: this.formData.tour,
        })
        .then(({ data }) => {
          if (data.msg) {
            this.handleError(data);
          } else {
            this.$refs.alert.classList.add("success");
            this.alertMsg = "Booking successful";
            return data;
          }
        })
        .then(() => {
          this.$refs.bookingForm.reset();
        })
        .catch((err) => {
          console.log(err);
        });
    },
    handleError(err) {
      console.log(err);
      if (err.msg === "No room on this tour") {
        this.tourFull = true;
        this.$refs.alert.classList.add("err");
        this.$refs.alert.classList.remove("success");
        this.alertMsg =
          "Sorry, this tour is full. Please try to book another one.";
      }
    },
  },
};
</script>
