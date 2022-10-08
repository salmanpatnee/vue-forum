<script setup>
import { onMounted, ref, computed } from "vue";
import PostList from '@/components/posts/PostIndex.vue';
import data from "@/data.json";

const props = defineProps({
  id: {
    type: String,
    required: true,
  },
});

const threads = ref([]);
const thread = ref([]);
const posts = ref([]);
const text = ref('');

const threadPosts = computed(() => posts.value.filter(post => post.threadId === props.id));

const handleAddPost = () => {

  const postId = Math.random();
  const post = {
    id: postId,
    publishedAt: Math.floor(Date.now() / 100), 
    text: text.value, 
    threadId: props.id, 
    userId: 'ALXhxjwgY9PinwNGHpfai6OWyDu2'
  };
  
  posts.value.push(post);
  thread.value.posts.push(postId);
  text.value = "";
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
    <form @submit.prevent="handleAddPost">
      <div class="mb-3">
        <textarea v-model="text" class="form-control" id="text" placeholder="Write post"></textarea>
      </div>
      <button type="submit" class="btn btn-primary">Add</button>
    </form>
  </div>
</template>
