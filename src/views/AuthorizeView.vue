<template>
    <div class="main-content">
      <div>
        <AuthorizeBuy></AuthorizeBuy>
      </div>
    </div>
  </template>
  
  <script>
  import AuthorizeBuy from '@/components/AuthorizeBuy.vue';
  
  export default {
    name: 'AuthorizeView',
    components: {
        AuthorizeBuy, 
    },
  };
  </script>
  
  <style scoped>
  .main-content {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  </style>
  