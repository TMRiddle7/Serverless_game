<template>
    <div class="container mt-2">
        <div class="row justify-content-center">
            <div class="col-md-6">
                <!-- Login Form Container -->
                <div class=" rounded">
                    <div class="text-center mb-4">
                        <h2>Login</h2>
                    </div>
                    <form @submit.prevent="handleSubmit">
                        <!-- Player ID Input -->
                        <div class="form-floating mb-3">
                            <input type="text" id="playerId" v-model="playerId" class="form-control "
                                placeholder="Enter your Player ID" required  />
                            <label for="playerId">Player ID</label>
                        </div>
                        <!-- Email Input -->
                        <div class="form-floating mb-3">
                            <input type="email" id="email" v-model="email" class="form-control"
                                placeholder="Enter your Email" />
                            <label for="email">Email</label>
                        </div>
                        <!-- Submit Button -->
                        <div class="d-grid">
                            <button type="submit" class="btn btn-primary">
                                Login
                            </button>
                        </div>
                    </form>
                    <div v-if="message" class="alert alert-info mt-3">{{ message }}</div>
                </div>
            </div>
        </div>
    </div>


</template>

<script setup lang="ts">
import { ref } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router';
import { isLoggedIn } from '../auth/auth.js';

const route = useRouter();

const playerId = ref('');
const email = ref('');
const message = ref('');
const isConnected = ref(false);

// Function to handle form submission
const handleSubmit = async () => {
    try {
        // Send a GET request to the Lambda function with query parameters
        const response = await axios.get('https://dwtlg9ar8e.execute-api.us-east-1.amazonaws.com/playerGet', {
            params: {
                PlayerID: playerId.value,
            },
        })

        try{
        const webSocketUrl = `wss://ov5y8form1.execute-api.us-east-1.amazonaws.com/Dev?playerId=${encodeURIComponent(playerId.value)}`;
        const socket = new WebSocket(webSocketUrl);
        
        socket.onopen =() =>
        {
            isLoggedIn.value = true;
            console.log(isLoggedIn.value)
            route.push('/home');
        };


        
        }
        catch(error){
            if (axios.isAxiosError(error)) {
            // Handle known Axios errors
            message.value = `Error: ${error.response?.data.message || error.message}`;
        } else {
            // Handle unknown errors
            message.value = `Unexpected Error: ${(error as Error).message}`;
        }
        }


        

    } catch (error) {
        // Handle errors
        if (axios.isAxiosError(error)) {
            // Handle known Axios errors
            message.value = `Error: ${error.response?.data.message || error.message}`;
        } else {
            // Handle unknown errors
            message.value = `Unexpected Error: ${(error as Error).message}`;
        }
    }
};
</script>

