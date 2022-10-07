<script setup>
import { onMounted, ref } from "vue";

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
const users = ref([]);

const getPostById = (id) => posts.value.find((post) => post.id === id);
const getUserById = (id) => users.value.find((user) => user.id === id);
const getImageSrc = (id) =>
  `https://i.pravatar.cc/500?img=${getUserById(getPostById(id).userId).id}`;

onMounted(() => {
  threads.value = data.threads;
  posts.value = data.posts;
  users.value = data.users;
  thread.value = threads.value.find((thread) => thread.id === props.id);
});
</script>

<template>
  <div class="container">
     <h1>{{ thread.title }}</h1>
    <div class="card my-5" v-for="postId in thread.posts" :key="postId">
        <div class="card-header">
          {{getUserById(getPostById(postId).userId).name}} Post In {{ thread.title }}
        </div>
        <div class="card-body">
          <div class="row">
            <div class="col-3 text-center">
              <img :src="getImageSrc(postId)" class="rounded mb-2 img-fluid rounded-start"
                :alt="getUserById(getPostById(postId).userId).name" />
            </div>
            <div class="col">
              <p class="card-text">{{ getPostById(postId).text }}</p>
              <p class="mb-4"><b>Published On:</b> {{ getPostById(postId).publishedAt }}</p>
              <a href="#" class="btn btn-primary">Read More</a>
            </div>
          </div>
        </div>
      </div>
     
  </div> 
</template>
