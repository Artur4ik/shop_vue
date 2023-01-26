import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import App from './App.vue'
import HomeMain from './views/HomeMain.vue'
import HomeAbout from './views/HomeAbout.vue'
import HomeSignIn from './views/HomeSignIn.vue'
import { createRouter, createWebHistory } from 'vue-router'
import { createPinia } from 'pinia'
import { createApp } from 'vue'

const routes = [
  { path: '/', component: HomeMain },
  { path: '/about', component: HomeAbout },
  { path: '/sign_in', component: HomeSignIn }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

const pinia = createPinia()

createApp(App).use(router).use(pinia).mount('#app')
