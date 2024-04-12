import { createStore } from 'vuex'

export default createStore({
  state: {
    books: [
      {id: 1, name: 'Name of the Wind', author: 'Patrick Rothfuss', price: 450 },
      {id: 2, name: 'The Catcher in the Rye', author: 'J.D. Salinger', price: 1280 },
      {id: 3, name: 'War and Peace', author: 'Leo Tolstoy', price: 740 },
      {id: 4, name: 'The Grapes of Wrath', author: 'John Steinbeck', price: 699 },
      {id: 5, name: 'To Kill a Mockingbird', author: 'Harper Lee', price: 871 },
      {id: 6, name: 'Pride and Prejudice', author: 'Jane Austen', price: 320 },
      {id: 7, name: 'One Hundred Years of Solitude', author: 'Gabriel Garcia Marquez', price: 442 },
      {id: 8, name: 'The Diary of a Young Girl', author: 'Anne Frank', price: 179 },
      {id: 9, name: 'Brave New World', author: 'Aldous Huxley', price: 498 },
      {id: 10, name: '1984', author: 'George Orwell', price: 999 },
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
