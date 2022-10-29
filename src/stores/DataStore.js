import { defineStore, acceptHMRUpdate } from "pinia";

export const useDataStore = defineStore("dataStore", {
  state: () => {
    return {
      data: [],
    };
  },
  actions: {
    async fill() {
      this.data = (await import("@/data.json")).default;
    },
    addPost(data, thread) {
      data.post.id = Math.random();
      const post = { ...data.post, threadId: thread.id };
      this.data.posts.push(post);
      thread.posts.push(post.id);
    },
  },
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useDataStore, import.meta.hot));
}
