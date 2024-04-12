import { createStore } from 'vuex'

export default createStore({
  state: {
    books: [
      {id: 1, name: 'Book of Knowledge', price: 100 },
      {id: 2, name: 'Book of Cooking', price: 100 },
      {id: 3, name: 'Book of Playing', price: 100 },
      {id: 4, name: 'Book of Sleeping', price: 100 },
      {id: 5, name: 'Book of Running', price: 100 },
      {id: 6, name: 'World Today', price: 100 },
      {id: 7, name: 'World Tomorrow', price: 200 },
      {id: 8, name: 'World Next Week', price: 300 },
      {id: 9, name: 'World Next Month', price: 400 },
      {id: 10, name: 'World Next Year', price: 500 },
    ],
    cart: [],
    authenticated: false,
    username: 'user', // set nyo dito user
    password: 'password' // set nyo dito password
  },
  getters: {
    bookList: state => state.books,
    cartList: state => state.cart,
    cartListLength: state => state.cart.length,
    totalPrice: state => {
      return state.cart.reduce((total, book) => total + book.price, 0);
    },
    isAuthenticated: state => state.authenticated,
  },
  mutations: {
    addToCart(state, book) {
      state.cart.push(book);
    },
    removeToCart(state, id) {
      state.cart.splice(id, 1);
    },
    emptyCart(state) {
      state.cart = [];
    },
    setAuth(state, authenticated) {
      state.authenticated = authenticated;
    }
  },
  actions: {
    checkout({ commit }) {
      commit('emptyCart');
    },

    login({commit, state}, {username, password}) {
      return new Promise((resolve) => {
        if (username === state.username && password === state.password) {
          commit('setAuth', true);
          resolve(true);
        } else {
          resolve(false);
        }
      })
    },

    logout({commit, state}) {
      commit('setAuth', false);
      commit('emptyCart');

    },

    authorize({commit, state}, {authPassword}) {
      return new Promise((resolve) => {
        if (authPassword === state.password) {
          commit('emptyCart');
          resolve(true);
        } else {
          resolve(false);
        }
      })
    }
  },
  modules: {
  }
})
