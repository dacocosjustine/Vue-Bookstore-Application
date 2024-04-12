<template>
    <h1>Shopping Cart</h1>
    <h5>Total Price: {{ totalPrice }}</h5>
    <button @click="checkOut">Check out Items</button>
    <ul v-for="(book, id) in shoppingCart" :key="book.id">
    Title: {{ book.name }} Price: {{ book.price }}
    <button @click="removeToCart(id)">Remove From Cart</button>
    </ul>
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