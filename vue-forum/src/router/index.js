import {createRouter,createWebHashHistory} from 'vue-router'
import Home from '@v/Home.vue'
import New from '@v/New.vue'
import User from '@v/User.vue'
import About from '@v/About.vue'
import Others1 from '@v/Others1.vue'
import Others2 from '@v/Others2.vue'
import Others31 from '@v/Others31.vue'
import Others32 from '@v/Others32.vue'

const routes = [
    {path: '/', redirect: '/home'},
    {path: '/home', component: Home},
    {path: '/new', component: New},
    {path: '/user', component: User},
    {path: '/about', component: About},
    {path: '/others1', component: Others1},
    {path: '/others2', component: Others2},
    {path: '/others31', component: Others31},
    {path: '/others32', component: Others32},
]

const router = createRouter({
    history: createWebHashHistory(), 
    routes, 
})

export default router