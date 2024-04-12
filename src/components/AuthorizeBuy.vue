<template>
    <div class="container">
        <h1>Authorize Payment</h1>
        <h3>Enter your password to authorize this transaction</h3>
        <input type="password" v-model="authPassword" placeholder="Enter Password">
        <button @click="authorizeTransaction">Authorize Transaction</button>
    </div>
</template>

<script>
export default {
name: 'AuthorizeBuy',

    data() {
        return {
            authPassword: ''
        };
    },
    methods: {
        authorizeTransaction() {
            this.$store.dispatch('authorize', {authPassword: this.authPassword}).then((success) =>{
                if (success) {
                    this.$store.dispatch('checkout').then(() => {
                        alert('Books Purchased');
                        this.$router.push('/');
                    });
                } else {
                    alert('Unable to Authorize Wrong Password');
                }
            })
        }
    }

};
</script>

<style scoped>
.container {
    align-items: center;
    text-align: center;
}
button {
    background-color: #4985CA;
    color: white;
    border: none;
    padding: 15px 35px;
    margin: 20px;
    border-radius: 3px;
}
input {
      padding: 10px;
      border: 1px solid #ccc;
      border-radius: 3px;
      margin-right: 10px;
      width: 400px;
  }
</style>