import Vue from 'vue'
import Router from 'vue-router'
// import Home from './views/Home.vue'
import DashBoard from './views/DashBoard'
import Authentication from './views/Authentication'
import Preview from './views/Preview'
import CheckOut from './views/CheckOut'

Vue.use(Router)

const router =  new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      component: DashBoard
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: Authentication
    },
    {
      path: '/preview',
      name: 'Preview',
      component: Preview
    },
    {
      path: '/checkout',
      name: 'checkout',
      component: CheckOut
    }
  ]
})

export default router
