import { createMemoryHistory, createRouter } from 'vue-router'

import HomePage from '/src/pages/HomePage.vue'
// import CinePage from '/src/pages/CinePage.vue'

const routes = [
  { path: '/', component: HomePage, name: 'home' },
  // { path: '/what-ive-watched', component: CinePage, name: 'cine' },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router;