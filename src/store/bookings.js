import { defineStore } from "pinia";
import axios from "axios";

export const useBookingsStore = defineStore("bookings", {
  state: () => ({
    bookings: [],
  }),
  actions: {
    getBookings() {
      axios
        .get("https://be-vue-booking.onrender.com/api/bookings")
        .then(({ data: { bookings } }) => {
          this.bookings = bookings;
        });
    },
  },
});
