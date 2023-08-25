import { defineStore } from "pinia";
import axios from "axios";

export const useToursStore = defineStore("tours", {
  state: () => ({
    tours: [],
    isLoading: false
  }),
  actions: {
    getTours() {
      this.isLoading = true;
      axios
        .get("https://be-vue-booking.onrender.com/api/tours")
        .then(({ data: { tours } }) => {
          this.tours = tours;
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          this.isLoading = false;
        })
    },
  },
});
