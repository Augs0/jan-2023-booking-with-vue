import { defineStore } from "pinia";
import axios from "axios";

export const useGuidesStore = defineStore("guides", {
  state: () => ({
    guides: [],
    isLoading: false,
  }),
  actions: {
    getGuides() {
      this.isLoading = true;
      axios
        .get("https://be-vue-booking.onrender.com/api/guides")
        .then(({ data: { guides } }) => {
          this.guides = guides;
        });

      this.isLoading = false;
    },
  },
});
