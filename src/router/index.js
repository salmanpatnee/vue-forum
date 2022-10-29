import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/TheHome.vue";
import CategoryShow from "@/views/CategoryShow.vue";
import ForumShow from "@/views/ForumShow.vue";
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
      path: "/categories", name: "categories.index", component: Home,
    },

    {
      path: "/categories/:id", name: "categories.show", component: CategoryShow, props: true
    },

    {
      path: "/forums/:id", name: "forums.show", component: ForumShow, props: true,
      beforeEnter(to, from, next) {
        const forumExists = data.forums.find(
          (forum) => forum.id === to.params.id
        );
        if (forumExists) return next();
        else {
          next({
            name: "404",
            params: { pathMatch: to.path.substring(1).split("/") },
          });
        }
      },
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
