<script setup>
import data from "@/data.json";
import { onMounted, ref } from "vue";

const threads = ref([]);
const posts = ref([]);
const users = ref([]);

const getPostById = id => posts.value.find(post => post.id === id);
const getUserById = id => users.value.find(user => user.id === id);
const getImageSrc = id => `https://i.pravatar.cc/500?img=${getUserById(getPostById(id).userId).id}`;

onMounted(() => {
  threads.value = data.threads;
  posts.value = data.posts;
  users.value = data.users;
});
</script>

<template>
  <main>
    <div class="container">

      <div v-for="thread in threads" :key="thread.id">
        <h1>{{thread.title}}</h1>
        <div class="card mb-3" v-for="postId in thread.posts" :key="postId">
          <div class="row g-0">
            <div class="col-md-4">
              <img :src="getImageSrc(postId)"
                class="img-fluid rounded-start" :alt="getUserById(getPostById(postId).userId).name">
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <p class="card-text">{{getPostById(postId).text}}</p>
                <p class="card-text">
                  <b>By</b>&nbsp;<small class="text-muted">{{getUserById(getPostById(postId).userId).name}}</small>
                  &nbsp; <b>On</b>&nbsp;{{getPostById(postId).publishedAt}}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </main>
</template>
