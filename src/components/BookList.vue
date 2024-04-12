<template>
  <h1>Book List</h1>
  <input type="text" v-model="SearchKey" placeholder="Search...">
    <ul v-for="book in filteredList" :key="book.id">
      Title: {{ book.name }} Price: {{ book.price }}
      <button @click="addToCart(book)">Add to Cart</button>
    </ul>
</template>

<script>
export default {
  name: 'BookList',

  data() {
    return {
      SearchKey: ''
    };
  },

  computed: {
    books() {
      return this.$store.getters.bookList;
    },
    filteredList() {
      const search = this.SearchKey.toLowerCase();
      return this.books.filter(book => {
        return book.name.toLowerCase().includes(search);
      });
    }
  },

  methods: {
    addToCart(book) {
      this.$store.commit('addToCart', book);
      console.log('Cart state:', this.$store.state.cart); // para makita current na laman ng cart[]
    }
  }
};
</script>