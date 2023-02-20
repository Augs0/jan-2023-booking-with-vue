import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import BookView from "../views/BookView.vue";
import ToursView from "../views/ToursView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/book",
      name: "book",
      component: BookView,
    },
    {
      path: "/tours",
      name: "tours",
      component: ToursView,
    },
  ],
});

export default router;
