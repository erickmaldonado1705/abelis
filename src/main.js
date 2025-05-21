import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'animate.css'
import './style.css'

// Import routes
import Home from './views/Home.vue'
import Services from './views/Services.vue'
import About from './views/About.vue'
import Contact from './views/Contact.vue'
import Cliente from './views/clientes /Cliente.vue'

// Define routes
const routes = [
  { path: '/', component: Home },
  { path: '/servicios', component: Services },
  { path: '/sobre-nosotros', component: About },
  { path: '/contactanos', component: Contact },
  { path: '/cliente', component: Cliente }
]

// Create router
const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  }
})

// Create app
const app = createApp(App)
app.use(router)
app.mount('#app')