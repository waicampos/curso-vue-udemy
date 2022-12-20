import Vue from 'vue'
import Router from 'vue-router'
import Inicio from './components/Inicio.vue'
import Menu from './components/template/Menu.vue'
import MenuAlt from './components/template/MenuAlt.vue'
import Usuario from './components/users/Usuario.vue'
import UsuarioLista from './components/users/UsuarioLista.vue'
import UsuarioDetalhe from './components/users/UsuarioDetalhe.vue'
import UsuarioEditar from './components/users/UsuarioEditar.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
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
            {path: ':id', component: UsuarioDetalhe, props: true},
            {path: ':id/editar', component: UsuarioEditar, props: true,
            name: 'editarUsuario'}
        ]
    },
    {
        path: '/redirecionar',
        redirect: '/usuario'
    }
]
})