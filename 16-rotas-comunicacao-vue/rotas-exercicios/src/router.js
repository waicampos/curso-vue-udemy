import Vue from 'vue'
import Router from 'vue-router'
import Inicio from './components/Inicio.vue'
import Menu from './components/template/Menu.vue'
import MenuAlt from './components/template/MenuAlt.vue'
//import Usuario from './components/users/Usuario.vue'
//import UsuarioLista from './components/users/UsuarioLista.vue'
//import UsuarioDetalhe from './components/users/UsuarioDetalhe.vue'
//import UsuarioEditar from './components/users/UsuarioEditar.vue'

Vue.use(Router)

const UsuarioEditar = () => import(/*webpackChunkName: "usuario"*/'./components/users/UsuarioEditar.vue')
const UsuarioDetalhe = () => import(/*webpackChunkName: "usuario"*/'./components/users/UsuarioDetalhe.vue')
const UsuarioLista = () => import(/*webpackChunkName: "usuario"*/'./components/users/UsuarioLista.vue')
const Usuario = () => import(/*webpackChunkName: "usuario"*/'./components/users/Usuario.vue')

const router = new Router({
    mode: 'history',
    scrollBehavior(to, from, savedPosition) {
        if(savedPosition){
            return savedPosition
        } else if(to.hash) {
            return {selector: to.hash}
        } else {
            return{x:0, y:1000}
        }
    },
    routes: [{
        path: '/',
        name: 'inicio',
        //component: Inicio
        components: {
            default: Inicio,
            menu: Menu
        }
    },
    {
        path: '/usuario',
        components: {
            default: Usuario,
            menu: MenuAlt,
            menuInferior: MenuAlt
        },
        props: true,
        children: [
            {path: '', component: UsuarioLista},
            {path: ':id', component: UsuarioDetalhe, props: true,
            beforeEnter: (to, from, next) => {
                // eslint-disable-next-line
                console.log("Antes da rota -> Usuário detalhe")
                next()
            }},
            {path: ':id/editar', component: UsuarioEditar, props: true,
            name: 'editarUsuario'}
        ]
    },
    {
        path: '/redirecionar',
        redirect: '/usuario'
    },
    {
        //Vai redirecionar qualquer rota não existente para a página principal
        path: '*',
        redirect: '/'
    }
]
})

router.beforeEach((to, from, next) => {
    // eslint-disable-next-line
    console.log("Antes das rotas -> Global")
    next()
    // if(to.path !== '/usuario') {
    //     next('/usuario')
    // }
    // else {
    //     next()
    // }
}) 

export default router