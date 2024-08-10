<template>
  <div class="container col-7">
    <div class="text-center mt-2">
      <h2>Sign up</h2>
    </div>
    <form @submit.prevent="handleSubmit">
      <div class="form-floating mb-3 mt-5">
        <input type="text" class="form-control" id="floatingInput" placeholder="PlayerID" v-model="playerId">
        <label for="floatingPassword">PlayerID</label>
      </div>
      <div class="form-floating mb-3">
        <input type="text" class="form-control" id="floatingInput" placeholder="PlayerName" v-model="playerName">
        <label for="floatingPassword">PlayerName</label>
      </div>
      <div class="form-floating mb-3">
        <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" v-model="email">
        <label for="floatingInput">Email address</label>
      </div>
      <div class="d-grid col-5 mx-auto">
      <button class="btn btn-outline-dark" type="submit">Submit</button>
    </div>
    </form>
    <div v-if="submitted">
      <h2>Submitted Information</h2>
      <p><strong>Player ID:</strong> {{ playerId }}</p>
      <p><strong>Player Name:</strong> {{ playerName }}</p>
      <p><strong>Email:</strong> {{ email }}</p>
      <p><strong>Message:</strong>{{ message }}</p>
    </div>
    <div v-if="errorMessage" class="error">
      <p>{{ errorMessage }}</p>
      <p>{{ message }}</p>
    </div>
  </div>


</template>
  
<script lang="ts">
  import axios from 'axios';
  export default {
    data() {
      return {
        playerId: '',
        playerName: '',
        email: '',
        submitted: false,
        message: '',
        errorMessage: ''
      };
    },
    methods: {
      async handleSubmit() {
        try {
          const response = await axios.post('https://dwtlg9ar8e.execute-api.us-east-1.amazonaws.com/playerPut', {
            PlayerID: this.playerId,
            PlayerName: this.playerName,
            Email: this.email
          });
  
          if (response.status === 200) {
            this.submitted = true;
            this.message = this.message;
            this.errorMessage = ''; // Clear any previous errors
          }else 
          if (response.status === 201) {
            this.submitted = true;
            this.message = response.statusText;
            this.errorMessage = ''; // Clear any previous errors
          }
          else {
            console.log(response.status);
            throw new Error('Failed to submit data');
          }
        } catch (error) {
          this.errorMessage = 'Failed to submit data. Please try again.';
          console.log(error);
        }
      }
    }
  };
  </script>
  
  
  <style scoped>
  .error {
    color: red;
  }
  </style>
  