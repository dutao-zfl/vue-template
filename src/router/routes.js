import index from '../views/index/index.vue'
import login from '../views/login/login.vue'

export default [
  {
    path: `/`,
    name: index.name,
    alias: '/index',
    component: index
  },
  {
    path: `/login`,
    name: login.name,
    component: login
  }
]
