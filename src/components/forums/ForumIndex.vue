<script setup>
import ForumItem from './ForumItem.vue';

defineProps({
    forums: {
        type: Array, 
        required: true
    }
})

</script>

<template>
    <ol class="list-group list-group-numbered" >
         <ForumItem v-for="(forum, index) in forums" :key="index" :forum="forum"/>
    </ol>
</template>