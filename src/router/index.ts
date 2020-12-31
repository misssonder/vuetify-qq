import Vue from 'vue'
import VueRouter, {RouteConfig} from 'vue-router'
import cookie from "js-cookie";

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
    {
        path: '/',
        redirect: '/layout',
    },
    {
        path: '/layout',
        redirect: '/friend',
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
        children: [
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
//路由守卫
router.beforeEach((to, from, next) => {
    if (to.fullPath != '/login') {//如果不是登录组件
        if (!cookie.get('token')) {//如果没有登录，就先进入login组件进行登录
            next('/login');
        } else {//如果登录了，那就继续
            next()
        }
    } else {//如果是登录组件，但是有token。
        next();
    }
    //不允许浏览器回退
    // if (!from.meta.allowBack){
    //     next(router.go(1))
    // }
})
export default router
