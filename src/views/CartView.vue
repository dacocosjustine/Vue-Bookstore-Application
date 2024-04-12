<template>
  <div class="main-content">
    <div>
      <CartList></CartList>
    </div>
  </div>
</template>

<script>
import CartList from '@/components/CartList.vue';

export default {
  name: 'CartView',
  components: {
    CartList, 
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
