import { createRouter, createWebHistory } from 'vue-router';
import FrontView from '../components/FrontView.vue';


const routes = [
  {
    path: '/',
    name: 'FrontView',
    component: FrontView,
  },
];

// Create the router instance
const router = createRouter({
  history: createWebHistory(), // Use history mode
  routes,
});

export default router; // Export the router instance