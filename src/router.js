import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

import News from './components/News'
import Login from './components/Login'
import Logout from './components/Logout'
import SignUp from './components/SignUp'
/*import Todo from './components/Todo'*/
import Account from './components/Account'
import NewsDetails from "./components/NewsDetails";
/*import Store from './store/general'*/

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
      {
          path: '/news',
          name: 'news',
          component: News
      },
      {
          path: '/login',
          name: 'login',
          component: Login
      },
      {
          path: '/logout',
          name: 'logout',
          component: Logout
      },
      {
          path: '/signup',
          name: 'signup',
          component: SignUp
      },
      {
          path: '/account',
          name: 'account',
          component: Account,
          /*beforeEnter: AuthGuard*/
      },
      {
          path: '/todo',
          name: 'todo',
          component: () => import('./components/Todo.vue')
      },
      {
          path: '/news/:id',
          props: true,
          name:'newsdetails',
          component: NewsDetails
      }

    /*{
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('./views/About.vue')
    }*/
  ]
})

/*
function AuthGuard(from,to,next) {
    if (Store.getters.getIsAuthed) {
        next()
    }else next('/login')
}*/
