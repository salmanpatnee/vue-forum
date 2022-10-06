import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ThreadShow from "../views/ThreadShow.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/threads/:id",
      name: "threads.show",
      component: ThreadShow,
      props: true,
    },
  ],
});

export default router;
