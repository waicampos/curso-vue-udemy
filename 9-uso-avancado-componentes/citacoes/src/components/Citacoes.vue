<template>
    <div class="citacoes">
        <span>
            <button @click="numero--">&lt;</button>
            <button @click="numero++">&gt;</button>
        </span>
        {{ numero }} {{ indice }}

        <Citacao>
            <h1 slot="fonte">{{citacoes[indice].fonte}}</h1>
            <p slot="autor">{{citacoes[indice].autor}}</p>
            <h6 slot="texto">{{citacoes[indice].texto}}</h6>
        </Citacao>
    </div>
</template>

<script>
import Citacao from './Citacao.vue'
export default {
    components: {Citacao},
    data() {
        return {
            numero: 0,
            citacoes: [{
                fonte: 'Jornal do Empreendedor',
                texto: 'Lembre-se sempre que você é absolutamente único. Assim como todos os outros.',
                autor: 'Margaret Mead'
            }, { 
                fonte: 'Frases de Mãe',
                texto: 'Isso não é um quarto, é um chiqueiro.',
                autor: 'Roberta'
            }, {
                fonte: 'Frases de Pai',
                texto: 'Vou contar até 3! 1, 2, 2...',
                autor: 'Gustavo'
            }]
        }
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
    },
    computed: {
        indice() {
            return Math.abs(this.numero % 3)
        }
    }
}
</script>

<style scoped>
    .citacoes {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    h1 {
        color: green!important;
    }
</style>
