<script setup>
import data from "@/data.json";
import { onMounted, ref, computed } from "vue";
import { RouterLink } from "vue-router";

const props = defineProps({
    thread: {
        type: Object, 
        required: true
    }
})

const users = ref([]);

const getUserById = (id) => users.value.find((user) => user.id === id);

const repliesCount = computed(() => props.thread.posts.length - 1)
onMounted(() => {
  users.value = data.users;
});

</script>
    
<template>

    <router-link :to="{name: 'threads.show', params:{id: thread.id}}" class="text-decoration-none">
    <li class="list-group-item d-flex justify-content-between align-items-start">
            <div class="ms-2 me-auto">
                <div class="fw-bold">{{thread.title}}</div>
                <!-- By <a href="#">{{getUserById(thread.userId).name}}</a>, {{thread.publishedAt}} -->
            </div>
            <div class="ms-2 me-5">
                <span class="badge bg-primary rounded-pill">{{repliesCount}}</span> replies
            </div>
            
        </li>
    </router-link>
</template>