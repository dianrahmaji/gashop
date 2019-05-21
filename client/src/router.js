import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Preview from './views/Preview'
import CheckOut from './views/CheckOut'
import AdminDashboard from './views/AdminDashboard'
import Orders from './views/Orders'

Vue.use(Router)

const router =  new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
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
    },
    {
      path:'/admin',
      name: 'Admin Dashboard',
      component: AdminDashboard
    },
    {
      path: '/admin/orders',
      name: 'Orders',
      component: Orders
    }
  ]
})

export default router
