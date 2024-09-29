<!-- src/App.vue -->
<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
    </nav>
    
    <!-- This is where routed components will be displayed -->
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>