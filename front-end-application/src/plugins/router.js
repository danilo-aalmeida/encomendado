import Vue from 'vue'
import Router from 'vue-router'
import Login from '../components/00-login/'
import Cadastro from '../components/01-cadastro/'

Vue.use(Router)

const router = new Router({
    routes: [
        {
            path:'/',
            name:'Login',
            component: Login
        },
        {
            path:'/cadastro',
            name:'Cadastro',
            component: Cadastro
        },

    ]}
)
export default router;