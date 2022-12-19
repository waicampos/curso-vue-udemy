<template>
    <div class="caixa azul">
        <slot name="conteudo"></slot>        
    </div>
</template>

<script>
export default {
    created() {
        // eslint-disable-next-line
        console.log('Criado Azul')
    },
    destroyed() {
        // eslint-disable-next-line
        console.log('Destruido Azul')
    },
    activated() {
        // eslint-disable-next-line
        console.log('Ativado Azul')
    },
    deactivated() {
        // eslint-disable-next-line
        console.log('Desativado Azul')
    }
}
</script>

<style scoped>

</style>
