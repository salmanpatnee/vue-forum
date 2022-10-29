<script setup>
import { useDataStore } from "@/stores/DataStore.js";
import { computed } from "vue";
import PostList from '@/components/posts/PostIndex.vue';
import PostCreate from "@/components/posts/PostCreate.vue";

const props = defineProps({
  id: {
    type: String,
    required: true,
  },
});

const dataStore = useDataStore();

dataStore.fill();

const threads = computed(() => dataStore.data.threads);

const thread = computed(() => {
  if(!threads.value) return [];
  return threads.value.find(thread => thread.id === props.id)
});

const posts = computed(() => dataStore.data.posts);

const threadPosts = computed(() => {
  if(!posts.value) return [];
  return posts.value.filter(post => post.threadId === props.id)
});

</script>

<template>
  <div class="container">
    <h1>{{ thread.title }}</h1>

    <PostList :posts="threadPosts" />

    <hr>

    <h2 class="display-6">Add New Post</h2>

    <!-- <PostCreate @save="handleSave" /> -->
    <PostCreate @save="dataStore.addPost($event, thread)" />

  </div>
</template>
