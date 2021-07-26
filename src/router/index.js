import Vue from 'vue'
import VueRouter from 'vue-router'
//import Home from '../views/Home.vue'
import Home from '../views/Home.vue'
import AdminHome from '../views/Admin/Home.vue'
import courses from '../views/Admin/courses.vue'
import student from '../views/Admin/student.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },

  {
    path: '/Admin',
    name: 'AdminHome',
    component: AdminHome,
    beforeEnter:(to, from, next) => {
      const isAuthenticated = localStorage.getItem('Id') ? true: false;
      if (to.name !== 'Home' && !isAuthenticated) next({ name: 'Home' })
      else next();
      } 
  },

   
  {
    path: '/course',
    name: 'courses',
    component: courses,
    beforeEnter:(to, from, next) => {
      const isAuthenticated = localStorage.getItem('Id') ? true: false;
      if (to.name !== 'Home' && !isAuthenticated) next({ name: 'Home' })
      else next();
      } 
  },
  {
    path: '/student',
    name: 'student',
    component: student,
    beforeEnter:(to, from, next) => {
      const isAuthenticated = localStorage.getItem('Id') ? true: false;
      if (to.name !== 'Home' && !isAuthenticated) next({ name: 'Home' })
      else next();
      } 
  },

  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
