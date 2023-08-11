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
    getSingleGuide(id) {
      // this.isLoading = true;
      axios
        .get(`https://be-vue-booking.onrender.com/api/guides/${id}`)
        .then(({ data: { guide } }) => {
          this.guide = guide;
          this.isLoading = false;
        });
    },
  },
});
