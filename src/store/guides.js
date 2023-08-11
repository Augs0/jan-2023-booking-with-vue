import { defineStore } from "pinia";
import axios from "axios";

export const useGuidesStore = defineStore("guides", {
  state: () => ({
    guides: [],
    guide: {},
    isLoading: true,
  }),
  actions: {
    getGuides() {
      // this.isLoading = true;
      axios
        .get("https://be-vue-booking.onrender.com/api/guides")
        .then(({ data: { guides } }) => {
          this.guides = guides;
          this.isLoading = false;
        });
    },
    getSingleGuide() {
      // this.isLoading = true;
      axios
        .get("https://be-vue-booking.onrender.com/api/guides/1")
        .then(({ data: { guide } }) => {
          this.guide = guide;
          this.isLoading = false;
        });
    },
  },
});
