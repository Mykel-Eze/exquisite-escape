import { createRouter, createWebHistory } from 'vue-router'

// Layouts
import Externals from '@/layouts/Externals.vue'
import Auth from '@/layouts/Auth.vue'

// External Views
import Home from '@/views/Home.vue'
import HelpCenter from '@/views/HelpCenter/Index.vue'
import HelpTopics from '@/views/HelpCenter/HelpTopics.vue'

// Auth Views
import SignIn from '@/views/SignIn.vue'

const routes = [
  {
    path: '/',
    component: Externals,
    children: [
      {
        path: '',
        name: 'home',
        component: Home
      },
      {
        path: 'help',
        name: 'help',
        component: HelpCenter
      },
      {
        path: '/help/topics',
        name: 'topics',
        component: HelpTopics
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
