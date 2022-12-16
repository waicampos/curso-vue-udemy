<template>
  <div id='app'>
    <h1>Contadores</h1>
    <app-contador /> 
    <app-contador /> 
  </div>
</template>

<script>
  import Contador from './components/Contador.vue'

  export default {
   name: 'App',
   components: {
    "app-contador": Contador
   }
}
</script>

<style>
  
</style>