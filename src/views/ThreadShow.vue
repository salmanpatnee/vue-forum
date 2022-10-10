<script setup>
import { onMounted, ref, computed } from "vue";
import data from "@/data.json";
import PostList from '@/components/posts/PostIndex.vue';
import PostCreate from "@/components/posts/PostCreate.vue";

const props = defineProps({
  id: {
    type: String,
    required: true,
  },
});

const threads = ref([]);
const thread = ref([]);
const posts = ref([]);

const threadPosts = computed(() => posts.value.filter(post => post.threadId === props.id));

const handleSave = (eventData) => {
  //Merging data
  const post = {...eventData.post, threadId: props.id}
  
  posts.value.push(post);
  thread.value.posts.push(post.id);
}

onMounted(() => {
  threads.value = data.threads;
  thread.value = threads.value.find((thread) => thread.id === props.id);
  posts.value = data.posts;
});
</script>

<template>
  <div class="container">
    <h1>{{ thread.title }}</h1>
    <PostList :posts="threadPosts" />
    <hr>
    <h2 class="display-6">Add New Post</h2>
    <PostCreate @save="handleSave"/>
  </div>
</template>
