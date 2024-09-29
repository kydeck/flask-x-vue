import { createApp } from 'vue';
import App from './App.vue';
import router from './router/routes'; // Adjust the path to point to routes.js

const app = createApp(App);

// Register the router
app.use(router);

// Mount the app
app.mount('#app');