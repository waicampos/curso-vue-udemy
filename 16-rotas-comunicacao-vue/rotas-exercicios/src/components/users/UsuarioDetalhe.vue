<template>
  <div class="usuario-detalhe">
    <h3>Usuário Detalhe</h3>
    <p><strong>Código:</strong>{{id}} / {{$route.params.id}}</p>
  
  <router-link tag="button" primario
    :to="{name: 'editarUsuario', params: {id},
         query: {completo: true, lingua: 'pt'},
         hash: '#rodape'}">
      Editar
  </router-link>
    
  <!--<router-link tag="button" primario
    to="`/usuario/${id}/editar`">
      Editar
  </router-link>-->
    
  </div>
</template>

<script>
export default {
  props: ['id'],
  //Não é possível usar o this da instância vue, dentro da função beforeRouteEnter, porque ela nem foi criada (ex. this.id).
  beforeRouteEnter (to, from, next) {
    // eslint-disable-next-line
    console.log("Dentro do Componente -> Usuário detalhe")
    next()
    // next(vm => {
    //   // eslint-disable-next-line
    //   console.log(vm.id)
    // })

    //Uma utilizade é verificar se o cliente está autenticado para acessar a rota
    const autenticado = false
    autenticado ? next() : next(false)
  }
    // data() {
    //     return {
    //         id: this.$route.params.id
    //     }
    // },
    // watch: {
    //     $route(to, from) {
    //         this.id = to.params.id
    //     }
    // },
}
</script>

<style>

</style>