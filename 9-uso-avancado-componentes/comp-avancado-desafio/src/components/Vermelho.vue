<template>
    <div class="caixa vermelho">
            <slot name="conteudo"></slot>        
    </div>
</template>

<script>
export default {
    created() {
        // eslint-disable-next-line
        console.log('Criado Vermelho')
    },
    destroyed() {
        // eslint-disable-next-line
        console.log('Destruido Vermelho')
    },
    activated() {
        // eslint-disable-next-line
        console.log('Ativado Vermelho')
    },
    deactivated() {
        // eslint-disable-next-line
        console.log('Desativado Vermelho')
    }
}
</script>

<style>

</style>
