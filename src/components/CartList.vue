<template>
    <h1>Shopping Cart</h1>
    <ul>
        <li v-for="(book, id) in shoppingCart" :key="book.id" class="bookList">
            <div class="bookDetails">
                <span class="title">{{ book.name }}</span> <br>
                <span class="author"> by {{ book.author }}</span>
            </div>
            <div class="bookPrice">
                <span class="price">P {{ book.price }}</span> 
                <button @click="removeToCart(id)">Remove</button>
            </div>
        </li>
    </ul>
    <div class="totalPrice">
        <h3>Total Price: {{ totalPrice }}</h3>
        <button @click="checkOut">Check out Items</button>
    </div>
    
</template>

<script>
export default {
    name: 'CartList',
    computed: {
        shoppingCart() {
            return this.$store.getters.cartList;
        },

        totalPrice() {
            return this.$store.getters.totalPrice;
        },

        cartLength() {
        return this.$store.getters.cartListLength;
        }
    },
    methods: {
        removeToCart(id) {
            this.$store.commit('removeToCart', id);
            if (this.cartLength === 0) {
                this.$router.push('/')
            }
            console.log(id) // para makita id ng item na nireremove
        },

        checkOut() {
            this.$router.push('/authorize')
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
  }
  .bookList {
    width: 500px;
    margin: 0 auto;
    display: flex;
    padding: 15px;
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    margin-bottom: 15px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  .price {
    font-weight: bold;
    font-size: 18px;
  }
  .bookPrice button {
    margin-left: 20px;
    background-color: #f65c39;
    color: white;
    border: none;
    padding: 8px 15px;
    border-radius: 3px;
  }
  .totalPrice {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  .totalPrice button {
    background-color: #4985CA;
    color: white;
    border: none;
    padding: 0px 35px;
    border-radius: 3px;
    height: 50px;
}
h1 {
    text-align: center;
}
</style>