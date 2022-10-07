<script setup>
import ThreadItem from './ThreadItem.vue';

defineProps({
    threads: {
        type: Array, 
        required: true
    }
})

</script>

<template>
    <ol class="list-group list-group-numbered" >
         <ThreadItem v-for="(thread, index) in threads" :key="index" :thread="thread"/>
    </ol>
</template>