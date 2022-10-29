<script setup>
import { useDataStore } from "@/stores/DataStore.js";
import { computed } from "vue";
import ThreadList from "@/components/threads/ThreadIndex.vue";


const props = defineProps({
  id: {
    type: String,
    required: true,
  },
});

const dataStore = useDataStore();

dataStore.fill();

const forums = computed(() => dataStore.data.forums);

const forum = computed(() => {
  if(!forums.value) return [];
  return forums.value.filter(forum => forum.id === props.id)
});

const threads = computed(() => dataStore.data.threads);

const forumThreads = computed(() => {
  if(!threads.value) return [];
  return threads.value.filter(thread => thread.forumId === props.id)
});


</script>

<template>
  <div class="container">
    <h1>{{forum.name}}</h1>
    <p class="lead">{{forum.description}}</p>
    <ThreadList :threads="forumThreads" />
  </div>
</template>
