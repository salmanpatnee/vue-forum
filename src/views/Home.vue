<script setup>
import data from "@/data.json";
import { onMounted, ref } from "vue";
import ForumList from "@/components/forums/ForumIndex.vue";

const forums = ref([]);

onMounted(() => {
  forums.value = data.forums;
});

</script>

<template>
  <div class="container">
    <h1 class="display-5 mb-5">Forums</h1>
    <ForumList :forums="forums"/>
  </div>
</template>
