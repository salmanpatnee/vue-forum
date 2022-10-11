<script setup>
import data from "@/data.json";
import { onMounted, ref, computed } from "vue";
import ForumList from "@/components/forums/ForumIndex.vue";


const props = defineProps({
  id: {
    type: String,
    required: true,
  },
});

const categories = ref([]);
const category = ref({});
const forums = ref([]);

const categoryForums = computed(() => forums.value.filter(thread => thread.categoryId === props.id));


onMounted(() => {
  categories.value = data.categories;
  category.value = categories.value.find((category) => category.id === props.id);
  forums.value = data.forums;
});
</script>

<template>
  <div class="container">
    <h1>{{category.name}}</h1>
    <!-- <p class="lead">{{forum.description}}</p> -->
    <ForumList :forums="categoryForums"/>
  </div>
</template>
