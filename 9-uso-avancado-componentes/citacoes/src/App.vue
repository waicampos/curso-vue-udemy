<template>
	<div id="app">		
		<button @click="mudar">Mudar</button>
		<keep-alive>
			<component :is="componentes[ativo]" />
		</keep-alive>
	</div>
</template>

<script>
import Citacoes from './components/Citacoes'
import Sobre from './components/Sobre'

export default {
	components: { Citacoes, Sobre },
	data() {
		return{
			componentes: ['Citacoes', 'Sobre'],
			ativo: 0
		}
	},
	methods: {
		mudar() {
			// eslint-disable-next-line
			console.log(this.componentes.length)
			this.ativo = (this.ativo + 1) % this.componentes.length
			// eslint-disable-next-line
			console.log(this.ativo)
		}
	}
}
</script>

<style>
	#app {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 100vh;
		font-size: 1.6rem;
	}

	button {
        outline: none;
        padding: 5px 15px 10px;
        margin: 10px 5px;
        border-radius: 3px;
        font-size: 2rem;
        font-weight: 300;
        color: #FFF;
        background-color: rgba(0, 0, 0, .5);
    }
</style>