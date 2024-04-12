import { createRouter, createWebHashHistory } from 'vue-router'
import store from '../store'; // import vuex
import HomeView from '../views/HomeView.vue'
import CartView from '../views/CartView.vue'
import AuthorizeBuy from '../views/AuthorizeView'
import LoginPage from '../views/LoginView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: { requiresAuth: true } 
  },
  {
    path: '/cart',
    name: 'cart',
    component: CartView,
    meta: { requiresAuth: true } 
  },
  {
    path: '/authorize',
    name: 'authorize',
    component: AuthorizeBuy,
    meta: { requiresAuth: true } 
  },
  {
    path: '/login',
    name: 'login',
    component: LoginPage,
    meta: { requiresAuth: false } 
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  const isAuthenticated = store.getters.isAuthenticated; 
  if (to.meta.requiresAuth && !isAuthenticated) {
    next('/login');
  }
  else if (to.name === 'login' && isAuthenticated) {
    next('/');
  } 
  else {
    next();
  }
});
export default router
