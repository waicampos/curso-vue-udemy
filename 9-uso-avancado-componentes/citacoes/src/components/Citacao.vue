<template>
    <div class="citacao">
        <slot name="autor"></slot>
        <slot name="texto"></slot>
        <slot name="fonte"></slot>
    </div>
</template>

<script>
export default {
    props: {
        texto: String
    },
    created() {
        // eslint-disable-next-line
        console.log('Criado')
    },
    destroyed() {
        // eslint-disable-next-line
        console.log('Destruido')
    },
    activated() {
        // eslint-disable-next-line
        console.log('Ativado')
    },
    deactivated() {
        // eslint-disable-next-line
        console.log('Desativado')
    }
}
</script>

<style scoped>
    .citacao {
        border: 1px solid #DDD;
        background-color: rgba(0, 0, 0, .1);
        padding: 25px;
        max-width: 450px;
    }

    h1 {
        color: red!important;
    }
</style>
