<script setup>
import data from "@/data.json";
import { onMounted, ref, computed } from "vue";
import ThreadList from "@/components/threads/ThreadIndex.vue";


const props = defineProps({
  id: {
    type: String,
    required: true,
  },
});

const forums = ref([]);
const forum = ref({});
const threads = ref([]);

const forumThreads = computed(() => threads.value.filter(thread => thread.forumId === props.id));


onMounted(() => {
  forums.value = data.forums;
  forum.value = forums.value.find((forum) => forum.id === props.id);
  threads.value = data.threads;
});
</script>

<template>
  <div class="container">
    <h1>{{forum.name}}</h1>
    <p class="lead">{{forum.description}}</p>
    <ThreadList :threads="forumThreads"/>
  </div>
</template>
