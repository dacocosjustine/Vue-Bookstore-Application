<template>
  <div class="main-content">
    <div>
      <LoginForm></LoginForm>
    </div>
  </div>
</template>

<script>
import LoginForm from '@/components/LoginForm.vue';
export default {
  name: 'LoginPage',
  components: {
    LoginForm
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
