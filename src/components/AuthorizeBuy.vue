<template>
    <h1>Authorize Payment</h1>
    <h5>Enter your Password to Authorize this Transaction</h5>
    <input type="password" v-model="authPassword" placeholder="Enter Password">
    <button @click="authorizeTransaction">Authorize Transaction</button>
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