<script setup>
import { computed } from "vue";
import { RouterLink } from "vue-router";

const props = defineProps({
    forum: {
        type: Object, 
        required: true
    }
})

const threadsCount = computed(() => {
    return props.forum.threads  ? props.forum.threads.length : 0;
})

const threadCountsWord = threadsCount => threadsCount === 1 ? 'thread' : 'threads';

</script>
    
<template>

    <router-link :to="{name: 'forums.show', params:{id: forum.id}}" class="text-decoration-none">
        <li class="list-group-item d-flex justify-content-between align-items-start">
            <div class="ms-2 me-auto">
                <div class="fw-bold">{{forum.name}}</div>
                <!-- <em>Posted in: </em> <a href="">Category</a> -->
            </div>
            <div class="ms-2 me-5">
                <span class="badge bg-primary rounded-pill">
                    {{threadsCount}}
                </span>
                {{threadCountsWord(threadsCount)}}
            </div>
        </li>
    </router-link>
</template>