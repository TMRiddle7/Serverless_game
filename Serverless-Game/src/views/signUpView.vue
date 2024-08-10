<script setup lang="ts" >
    import signup from '../components/Signup.vue';
    import login from '../components/Login.vue';

    import {RouterLink,RouterView,useRouter,useRoute} from 'vue-router';
    import { computed, ref } from 'vue';
    const route = useRoute();

    const router = useRouter();
    const goBack = () => router.back();
    const goHome = () => router.push('/home');

   // Reactive property to keep track of the active view
const activeView = ref<'signup' | 'login'>('signup')

// Functions to set the active view
const showSignup = () => {
  activeView.value = 'signup';
};

const showLogin = () => {
  activeView.value = 'login';
};
</script>


<template>
    <main>
        <div class="container mt-5 row justify-content-center col-10 mx-auto">
        <!-- Nav tabs -->
        <ul class="nav nav-tabs " id="myTab" role="tablist">
            <li class="nav-item" role="presentation">
                <button class="nav-link active" id="login-tab" data-bs-toggle="tab" data-bs-target="#login" type="button" role="tab" aria-controls="login" aria-selected="true">Login</button>
            </li>
            <li class="nav-item" role="presentation">
                <button class="nav-link" id="signup-tab" data-bs-toggle="tab" data-bs-target="#signup" type="button" role="tab" aria-controls="signup" aria-selected="false">Sign Up</button>
            </li>
        </ul>

        <!-- Tab content -->
        <div class="tab-content" id="myTabContent">
            <div class="tab-pane fade show active" id="login" role="tabpanel" aria-labelledby="login-tab">
                <!-- Login component will be rendered here -->
                <login />
            </div>
            <div class="tab-pane fade" id="signup" role="tabpanel" aria-labelledby="signup-tab">
                <!-- Signup component will be rendered here -->
                <signup />
            </div>
        </div>
    </div>
    </main>


</template>