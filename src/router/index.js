import { createRouter, createWebHistory } from 'vue-router'

// Layouts
import Externals from '@/layouts/Externals.vue'
import Auth from '@/layouts/Auth.vue'

// Externl Views
import Home from '@/views/Home.vue'
import HelpCenter from '@/views/HelpCenter/Index.vue'
import SignIn from '@/views/SignIn.vue'

const routes = [
  {
    path: '/',
    component: Externals,
    children: [
      {
        path: '',
        name: 'Home',
        component: Home
      },
      {
        path: 'help-center',
        name: 'HelpCenter',
        component: HelpCenter
      },
    ]
  },
  {
    path: '/auth',
    component: Auth,
    children: [
      {
        path: '',
        name: 'SignIn',
        component: SignIn
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
