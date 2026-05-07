// router/index.js
import { createRouter, createWebHashHistory } from 'vue-router'


const routes = [
  {
    path: '/order-detail/:id',
    name: 'order-detail',
    component: () => import('../views/OrderDetail.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/order-detail/1'
  }
]

const router = createRouter({
  // createWebHashHistory(import.meta.env.BASE_URL),
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes
})

export default router