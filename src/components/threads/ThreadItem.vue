<script setup>
import { computed } from "vue";
import { RouterLink } from "vue-router";

const props = defineProps({
    thread: {
        type: Object, 
        required: true
    }
})

const repliesCount = computed(() => props.thread.posts.length)

</script>
    
<template>

    <router-link :to="{name: 'threads.show', params:{id: thread.id}}" class="text-decoration-none">
    <li class="list-group-item d-flex justify-content-between align-items-start">
            <div class="ms-2 me-auto">
                <div class="fw-bold">{{thread.title}}</div>
                <em>Published at:</em>  <b>
                    <AppDate :timestamp="thread.publishedAt" />
                </b>
            </div>
            <div class="ms-2 me-5">
                <span class="badge bg-primary rounded-pill">{{repliesCount}}</span> replies
            </div>
            
        </li>
    </router-link>
</template>