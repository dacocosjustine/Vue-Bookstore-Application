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

<style scoped>
.form {
    display: flex;
    flex-direction: column;
    gap: 5px;
}
input {
      padding: 10px;
      border: 1px solid #ccc;
      border-radius: 3px;
      margin-right: 10px;
      width: 400px;
  }
  button {
    background-color: #4985CA;
    color: white;
    border: none;
    padding: 15px 35px;
    margin-top: 20px;
    border-radius: 3px;
}
</style>