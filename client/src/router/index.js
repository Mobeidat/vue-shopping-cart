import Vue from 'vue';
import Router from 'vue-router';
import Home from '../views/Home.vue';
import Category from '../views/Category.vue';
import Product from '../views/Product.vue';
import Checkout from '../views/Checkout.vue';
import Login from '../views/Login.vue';
import Signup from '../views/Signup.vue';
import NotFound from '../views/NotFound.vue';

Vue.use(Router);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/category/:slug',
    name: 'category',
    component: Category,
  },
  {
    path: '/product/:id',
    name: 'product',
    component: Product,
  },
  {
    path: '/checkout',
    name: 'Checkout',
    component: Checkout,
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
  },
  {
    path: '/signup',
    name: 'signup',
    component: Signup,
  },
  {
    path: '/404',
    name: '404',
    component: NotFound,
  },
  {
    path: '*',
    redirect: '/404',
  },
];

const scrollBehavior = (to, from, savedPosition) => {
  if (savedPosition) {
    return savedPosition;
  }

  if (to.hash) {
    return { selector: to.hash };
  }

  return { x: 0, y: 0 };
};

const router = new Router({
  mode: 'history',
  routes,
  scrollBehavior,
});

// router.beforeEach((to, from, next) => {
//   if (to.matched.some((record) => record.meta.requiresAuth)) {
//     if (store.getters['auth/authenticated']) {
//       return next();
//     } else {
//       return next({
//         path: '/login',
//         params: { nextUrl: to.fullPath },
//       });
//     }
//   }

//   next();
// });

export default router;
