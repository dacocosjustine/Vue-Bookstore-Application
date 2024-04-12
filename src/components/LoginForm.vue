<template>
<h1>Login</h1>
<div class="form">
    <label>Username</label>
    <input type="text" v-model="username" placeholder="Enter Username"></input>
    <label>Password</label>
    <input type="password" v-model="password" placeholder="Enter Password"></input>
    <button @click="LoginUser">Login</button>
</div>
</template>
  
<script>
export default {
    name: 'LoginForm',
    data() {
        return {
            username: '',
            password: ''
        };
    },
    methods: {
        LoginUser() {
            this.$store.dispatch('login', {username: this.username, password: this.password}).then((success) =>{
                if (success) {
                    this.$router.push('/');
                } else {
                    alert('Incorrect username or password');
                }
            })
        }
    }
};
</script>

<style>
.form {
    display: flex;
    flex-direction: column;
    gap: 5px;
}
</style>