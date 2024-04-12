<template>
  <nav>
    <div class="logo">
      <a>Online Botore</a>
    </div>
    <router-link v-if="isAuthenticated === true" to="/">Book List</router-link>
    <router-link v-if="cartLength > 0" to="/cart">In Cart ({{ cartLength }})</router-link>
  </nav>
  <router-view/>
  <div class="logout-btn">
      <button v-if="isAuthenticated === true" @click="LogoutUser">Logout</button>
    </div>
</template>

<script>

export default {
  computed: {
    cartLength() {
      return this.$store.getters.cartListLength;
    },

    isAuthenticated() {
      return this.$store.getters.isAuthenticated;
    },
  },

  methods: {
    LogoutUser() {
      this.$store.dispatch('logout')
      this.$router.push('/login')
    }
  }
};

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

nav {
  display: flex;
  gap: 10px;
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

ul {
  list-style-type: none;
  padding: 0;
}

.logo a{
  padding: 20px;
  color: 34495E;
  background-color: #41B883;
}

.logout-btn {
  flex:1;
  position: absolute;
  bottom: 0;
  right: 0;
  margin: 10px; 
}

</style>
