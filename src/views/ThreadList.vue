<script setup>
import data from "@/data.json";
import { onMounted, ref } from "vue";
import ThreadList from "@/components/threads/ThreadIndex.vue";

const threads = ref([]);

onMounted(() => {
  threads.value = data.threads;
});

</script>

<template>
  <div class="container">
    <ThreadList :threads="threads"/>
  </div>
</template>
