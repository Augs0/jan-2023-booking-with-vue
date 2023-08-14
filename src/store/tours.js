import { defineStore } from "pinia";
import axios from "axios";

export const useToursStore = defineStore("tours", {
  state: () => ({
    tours: [],
  }),
  actions: {
    getTours() {
      axios
        .get("https://be-vue-booking.onrender.com/api/tours")
        .then(({ data: { tours } }) => {
          this.tours = tours;
        });
    },
  },
});
