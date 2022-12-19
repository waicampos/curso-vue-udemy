<template>
    <div class="caixa verde">
        <slot name="conteudo"></slot>        
    </div>
</template>

<script>
export default {
    created() {
        // eslint-disable-next-line
        console.log('Criado Verde')
    },
    destroyed() {
        // eslint-disable-next-line
        console.log('Destruido Verde')
    },
    activated() {
        // eslint-disable-next-line
        console.log('Ativado Verde')
    },
    deactivated() {
        // eslint-disable-next-line
        console.log('Desativado Verde')
    }
}
</script>

<style scoped>

</style>
