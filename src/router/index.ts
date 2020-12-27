import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    redirect: '/layout',
  },
  {
    path: '/layout',
    redirect: '/message',
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import( '../views/login/login.vue')
  },
  {
    path: '/message/details',
    name: 'MessageDetail',
    component: () => import( '../views/message/message-details.vue')
  },
  {
    path: '/friend/details',
    name: 'FriendDetail',
    component: () => import( '../views/friend/friend-details.vue')
  },
  {
    path: '/layout',
    name: 'Layout',
    component: () => import( '../views/layout/layout.vue'),
    children:[
      {
        path: '/message',
        name: 'Message',
        component: () => import( '../views/message/message.vue')
      },
      {
        path: '/friend',
        name: 'Friend',
        component: () => import( '../views/friend/friend.vue')
      },
      {
        path: '/discover',
        name: 'Discover',
        component: () => import( '../views/discover/discover.vue')
      }
    ]
  },

]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
