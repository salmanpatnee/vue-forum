<script setup>
import { onMounted, ref } from 'vue';
import data from "@/data.json";

defineProps({
    posts: {
        type: Array, 
        required: true
    }
})

const users = ref([]);

const getUserById = (id) => users.value.find((user) => user.id === id);

const getImageSrc = (id) => `https://i.pravatar.cc/500?img=${id}`;





onMounted(() => {
  users.value = data.users;
});
</script>

<template>
 <div class="card my-5" v-for="post in posts" :key="post.id">
      <div class="card-header">
        {{getUserById(post.userId).name}} Says
      </div>
      <div class="card-body">
        <div class="row">
          <div class="col-3 text-center">
            <img :src="getImageSrc(post.userId)" class="rounded mb-2 img-fluid rounded-start"
              :alt="getUserById(post.userId).name" />
          </div>
          <div class="col">
            <p class="card-text">{{ post.text }}</p>
            <p class="mb-4"><em>Published at:</em> <b>
              <AppDate :timestamp="post.publishedAt" />
            </b></p>
            <a href="#" class="btn btn-primary">Read More</a>
          </div>
        </div>
      </div>
    </div>
</template>