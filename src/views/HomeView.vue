<script setup>
import data from "@/data.json";
import { onMounted, ref } from "vue";
import ThreadList from "@/components/threads/ThreadIndex.vue";

const threads = ref([]);
const isLoaded = ref(false);


onMounted(() => {
  threads.value = data.threads;
  isLoaded.value = true;
});

</script>

<template>
  <div class="container" v-if="isLoaded">
    <ThreadList :threads="threads"/>
  </div>
</template>
