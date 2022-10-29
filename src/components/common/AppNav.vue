<script setup>
import { RouterLink } from "vue-router";
import { useAuthUserStore } from "@/stores/AuthUserStore.js";
const authUserStore = useAuthUserStore();

</script>

<template>

    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container">
            <a class="navbar-brand" href="#">Vue Forum</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <router-link :to="{name: 'home'}" class="nav-link">
                            Home
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link :to="{name: 'categories.index'}" class="nav-link">
                            Categories
                        </router-link>
                    </li>
                </ul>
                <div v-if="authUserStore.authUser" class="d-flex ml-auto align-items-center">
                    <img :src="authUserStore.authUser[0].avatar" 
                    class="img-fluid img-thumbnail rounded-circle me-2" width="50"
                        :alt="`${authUserStore.authUser[0].name} profile picture`" />
                    {{authUserStore.authUser[0].name}}
                </div>
            </div>
        </div>
    </nav>
</template>