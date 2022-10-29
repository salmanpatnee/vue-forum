<script setup>
import { useDataStore } from "@/stores/DataStore.js";

import { computed} from "vue";
import CategoryList from "@/components/categories/CategoryIndex.vue";

const dataStore = useDataStore();


dataStore.fill();

const categories = computed(() => dataStore.data.categories);
</script>


<template>
    <div class="container">
        <CategoryList :categories="categories"/>
    </div>  
</template>