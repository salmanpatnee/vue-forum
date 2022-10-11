<script setup>
import data from "@/data.json";
import { onMounted, ref } from "vue";
import ForumList from "@/components/forums/ForumIndex.vue";

const forums = ref([]);

onMounted(() => {
  forums.value = data.forums;
});

defineProps({
    categories: {
        type: Array, 
        required: true
    }
})

const getForumsByCategory = categoryId => {
    return forums.value.filter(forum => forum.categoryId === categoryId);
}
</script>

<template>
    <div v-for="category in categories" :key="category.id" class="my-4">
        <router-link :to="{name: 'categories.show', params:{id: category.id}}" class="text-decoration-none">
            <h2 class="display-5 mb-4">{{category.name}}</h2>
        </router-link>
        <ForumList :forums="getForumsByCategory(category.id)"/>
    </div>

</template>