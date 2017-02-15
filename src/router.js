import VueRouter from 'vue-router';
import Auth from './components/Auth.vue';
import Stacks from './components/Stacks.vue'
import NewStack from './components/NewStack.vue'
import Stack from './components/Stack.vue'

const checkFromAuth = (to, from, next) => {
  const query = window.location.search.substr(1).split('=');
  console.log('checkFromAuth', query);
  if (query[0] === 'mode') {
    console.log('Redirecting to auth');
    next({
      path: '/stacks',
      query: { mode: query[1] },
    });
  } else {
    next('/auth');
  }
};

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: Stacks, beforeEnter: checkFromAuth },
    { path: '/stacks', component: Stacks },
    {path: '/stack/:id', component: Stack},
    {path: '/newstack', component: NewStack},
    { path: '/auth', component: Auth },
  ],
});
router.beforeEach((to, from, next) => {
  // check for auth
  next();
});

export default router;
