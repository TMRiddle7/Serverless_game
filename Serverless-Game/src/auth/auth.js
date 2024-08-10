
import { ref } from 'vue';

export const isLoggedIn = ref(false);

if (process.env.NODE_ENV === 'development') {
    // Only expose in development mode to avoid security risks in production
    window.isLoggedIn = isLoggedIn;
  }