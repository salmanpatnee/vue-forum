<script setup>
import data from "@/data.json";
import { onMounted, ref} from "vue";
import CategoryList from "@/components/categories/CategoryIndex.vue";

const categories = ref([]);

onMounted(() => {
    categories.value = data.categories;
});

</script>


<template>
    <div class="container">
        <CategoryList :categories="categories"/>
    </div>  
</template>