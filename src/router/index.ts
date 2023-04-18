import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutViewVue from '../views/AboutView.vue'
import ServicesView from '../views/ServicesView.vue'
import ContactView from '../views/ContactView.vue'
import BlogViewVue from '../views/BlogView.vue'
import PostView from '../views/PostView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView //RUTA VIEW 
  },
  {
    path: '/about',
    name: 'about',
    component: AboutViewVue //RUTA VIEW 
  },
  {
    path: '/services',
    name: 'services',
    component: ServicesView //RUTA VIEW 
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactView //RUTA VIEW 
  },
  {
    path: '/blog', //representar paranetros con :
    name: 'blog',
    component: BlogViewVue
  },
  {
    path: '/blog/:id',
    name: 'post',
    component: PostView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
