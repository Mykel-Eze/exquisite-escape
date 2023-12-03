import { createRouter, createWebHistory } from 'vue-router'

// Layouts
import Externals from '../Externals.vue'

// Externl Views
import Home from '@/views/Home.vue'
import HelpCenter from '@/views/HelpCenter/Index.vue'

const routes = [
  {
    path: '/',
    component: Externals,
    children: [
      {
        path: 'home',
        alias: '',
        name: 'Home',
        component: Home
      },
      {
        path: 'help-center',
        alias: '',
        name: 'HelpCenter',
        component: HelpCenter
      },
    ]
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
