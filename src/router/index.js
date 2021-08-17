import { createRouter, createWebHistory } from 'vue-router'
import EventList from '../views/EventList.vue'
import About from '../views/About.vue'
import Layout from '../views/event/Layout'
import Details from '../views/event/Details'
import Register from '../views/event/Register'
import Edit from '../views/event/Edit'

const routes = [
  {
    path: '/',
    name: 'EventList',
    component: EventList,
    props(route) {
      return {
        page: parseInt(route.query.page) || 1,
        perPage: 4
      }
    }
  },
  {
    path: '/event/:id',
    name: 'Layout',
    props: true,
    component: Layout,
    children:[
      {
        path: '',
        name: 'Details',
        component: Details
      },
      {
        path: 'register',
        name: 'Register',
        component: Register
      },
      {
        path: 'edit',
        name: 'Edit',
        component: Edit
      }
      ]
  },

  {
    path: '/about',
    name: 'About',
    component: About
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
export default router

