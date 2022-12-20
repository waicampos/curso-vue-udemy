import Vue from 'vue'
import Router from 'vue-router'
import Inicio from './components/Inicio.vue'
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
        component: Inicio
    },
    {
        path: '/usuario',
        component: Usuario,
        props: true,
        children: [
            {path: '', component: UsuarioLista},
            {path: ':id', component: UsuarioDetalhe, props: true},
            {path: ':id/editar', component: UsuarioEditar, props: true,
            name: 'editarUsuario'}
        ]
    }]
})