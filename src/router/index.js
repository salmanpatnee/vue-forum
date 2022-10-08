import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import ThreadShow from "@/views/ThreadShow.vue";
import NotFound from "@/views/NotFound.vue";
import data from "@/data.json";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/", name: "home", component: Home,
    },
    {
      path: "/threads/:id", name: "threads.show", component: ThreadShow, props: true,
      beforeEnter(to, from, next) {
        const threadExists = data.threads.find(
          (thread) => thread.id === to.params.id
        );
        if (threadExists) return next();
        else {
          next({
            name: "404",
            params: { pathMatch: to.path.substring(1).split("/") },
          });
        }
      },
    },
    {
      path: "/:pathMatch(.*)*", name: "404", component: NotFound,
    },
  ],
});

export default router;
