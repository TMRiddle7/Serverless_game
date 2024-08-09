<template>
    <div>
      <h1>Registration Page</h1>
      <form @submit.prevent="handleSubmit">
        <div>
          <label for="playerId">Player ID:</label>
          <input
            type="text"
            id="playerId"
            v-model="playerId"
            placeholder="Enter your Player ID"
          />
        </div>
        <div>
          <label for="playerName">Player Name:</label>
          <input
            type="text"
            id="playerName"
            v-model="playerName"
            placeholder="Enter your Player Name"
          />
        </div>
        <div>
          <label for="email">Email:</label>
          <input
            type="email"
            id="email"
            v-model="email"
            placeholder="Enter your email"
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      <div v-if="submitted">
        <h2>Submitted Information</h2>
        <p><strong>Player ID:</strong> {{ playerId }}</p>
        <p><strong>Player Name:</strong> {{ playerName }}</p>
        <p><strong>Email:</strong> {{ email }}</p>
        <p><strong>Msssage:</strong>{{ message }}</p>
      </div>
      <div v-if="errorMessage" class="error">
        <p>{{ errorMessage }}</p>
        <p>{{ message }}</p>
      </div>
    </div>
  </template>
  
  <script>
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
            this.message = response.statusText;
            this.errorMessage = ''; // Clear any previous errors
          }else 
          if (response.status === 201) {
            this.submitted = true;
            this.message = response.data.message;
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
  