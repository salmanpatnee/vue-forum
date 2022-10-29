<script setup>
import { useDataStore } from "@/stores/DataStore.js";
import {computed } from "vue";
import ForumList from "@/components/forums/ForumIndex.vue";

const props = defineProps({
  id: {
    type: String,
    required: true,
  },
});

const dataStore = useDataStore();

dataStore.fill();

const categories = computed(() => dataStore.data.categories);
const forums = computed(() => dataStore.data.forums);

const category = computed(() => {
  if(!categories.value) return [];
  return categories.value.filter(category => category.id === props.id)
});

const categoryForums = computed(() => {
  return forums.value.filter(thread => thread.categoryId === props.id)
});

</script>

<template>
  <div class="container">

    <h1>{{category[0].name}}</h1>
    <ForumList :forums="categoryForums" />
  </div>
</template>
