import { defineStore } from "pinia";
import axios from "axios";

export const useGuidesStore = defineStore("guides", {
  state: () => ({
    guides: [],
    guide: {},
  }),
  actions: {
    getGuides() {
      axios
        .get("https://be-vue-booking.onrender.com/api/guides")
        .then(({ data: { guides } }) => {
          this.guides = guides;
        });
    },
    getSingleGuide(id) {
      axios
        .get(`https://be-vue-booking.onrender.com/api/guides/${id}`)
        .then(({ data: { guide } }) => {
          this.guide = guide;
        });
    },
  },
});
