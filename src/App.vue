<script setup>
import { RouterView } from "vue-router";
import AppNav from "./components/common/AppNav.vue";
</script>

<template>
  <AppNav />
  <main>
    <RouterView />
  </main>
</template>
