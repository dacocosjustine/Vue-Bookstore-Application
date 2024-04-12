<template>
  <div class="container">
    <div class="header-section">
      <h1>Book List</h1>
      <input type="text" v-model="SearchKey" placeholder="Search...">
    </div>
    <ul>
      <li v-for="book in filteredList" :key="book.id" class="bookList">
        <div class="bookDetails">
          <span class="title">{{ book.name }}</span> <br>
          <span class="author"> by {{ book.author }}</span>
        </div>
        <div class="bookPrice">
          <span class="price">P {{ book.price }}</span> 
          <button @click="addToCart(book)">Add to Cart</button>
        </div>
      </li>
    </ul>
  </div>
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

<style scoped>
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
  }
  li {
    margin: auto;
    
  }
  ul {
    list-style-type: none;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
  }
  .bookList {
    width: 300px;
    margin: 0 auto;
    display: flex;
    padding: 15px;
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    margin-bottom: 15px;
    flex-direction: column;
  }
  .header-section {
    text-align: center;
  }
  h1 {
    text-align: center;
  }
  input {
    width: 300px;
    height: 20px;
  }
  .bookDetails {
    text-align: left;
    margin-bottom: 20px;
  }
  .bookPrice {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .price {
    font-weight: bold;
    font-size: 18px;
    color: #5598E5;
  }
  .bookPrice button {
    background-color: #4985CA;
    color: white;
    border: none;
    padding: 8px 15px;
    border-radius: 3px;
  }
  .title {
    font-weight: bold;
    font-size: 20px;
  }
</style>