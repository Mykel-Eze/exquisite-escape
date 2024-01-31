import { createRouter, createWebHistory } from 'vue-router'

// Layouts
import Externals from '@/layouts/Externals.vue'
import Auth from '@/layouts/Auth.vue'

// External Views
import Home from '@/views/Home.vue'
import HelpCenter from '@/views/HelpCenter/Index.vue'
import HelpTopics from '@/views/HelpCenter/HelpTopics/Index.vue'
import SingleTopicsPage from '@/views/HelpCenter/HelpTopics/SingleTopicPage'

// Auth Views
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
        path: 'help',
        name: 'Help',
        component: HelpCenter
      },
      {
        path: '/help/topics',
        name: 'Topics',
        component: HelpTopics
      },
      {
        path: '/help/topics/topic-page',
        name: 'SingleTopics',
        component: SingleTopicsPage
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
