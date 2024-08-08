<template>
    <div>
      <h1>Sign Up</h1>
      <form @submit.prevent="handleSubmit">
        <div>
          <label for="username">Username:</label>
          <input
            type="text"
            id="username"
            v-model="username"
            placeholder="Enter your username"
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
        <p><strong>Username:</strong> {{ username }}</p>
        <p><strong>Email:</strong> {{ email }}</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        username: '',
        email: '',
        submitted: false
      };
    },
    methods: {
      handleSubmit() {
        this.submitted = true;
      }
    }
  };
  </script>
  
  <style scoped>
  /* Add your styles here */
  </style>
  