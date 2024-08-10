<script setup lang="ts">
import {ref, computed} from 'vue';
import { RouterLink, RouterView, useRoute ,useRouter} from 'vue-router'
import { isLoggedIn } from '../src/auth/auth.js';

const route = useRoute();

const hideButtonsRoutes = ['/signup', '/another-route', '/yet-another-route']

const isSpecialRoute = computed(() => hideButtonsRoutes.includes(route.path))
console.log(isLoggedIn.value)
const router = useRouter();
    const goBack = () => router.back();
    const goHome = () => router.push('/home');
</script>

<template>

  <div id="app" >
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark p-2 mb-2">
    <div class="container-fluid">
      <p class="text-white mt-auto" v-if="isLoggedIn.value" >Online</p>
      <span class="navbar-brand ms-auto ">Your Brand</span>
      <div class="d-flex">
        <RouterLink v-if="isSpecialRoute" class="" to="/home"><img class="llimg" src="/logo.png.jpg" alt="AskMe" width="128" height="72"></RouterLink>
      </div>
      
    </div>
  </nav>

    <div v-show="!isSpecialRoute" class="container">
      <header class="header">
        <img src="/logo.png.jpg" alt="AskMe" width="384" height="216">
      </header>
    <div class="container">
      <div class=" d-grid gap-2  col-6 mx-auto">
        <RouterLink to="/home" class="mx-auto"><button class="btn btn-outline-dark">Home</button></RouterLink>
        <RouterLink to="/signup" class="mx-auto"><button class="btn btn-outline-dark">SignUP</button></RouterLink>
       </div>
    </div>
  </div>

  <div v-if="isSpecialRoute" class="container">
    <RouterView />
  </div>
  <footer class="footer mt-auto" v-if="isSpecialRoute" >
                <div class="footer-buttons">
                  <button class="btn btn-outlint-dark" @click="goBack">Back</button>
                  <button class="btn btn-outlint-dark" @click="goHome">Home</button>
                </div>
  </footer>


  </div>
</template>

