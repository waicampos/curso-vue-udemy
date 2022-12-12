new Vue({
    el: '#desafio',
    data: {
        valor: 50
    },
    computed: {
        resultado() {
            return this.valor != 37 ? 
            "Valor diferente de 37" :
            "Valor Igual a 37"
        }
    },
    watch: {
        valor() {
            setTimeout(() => {
                this.valor = 0
            }, 5000)
        }
    }
});