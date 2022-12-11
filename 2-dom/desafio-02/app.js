new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods: {
        botaoPressionado(e) {
            alert('Botão Pressionado')
        },
        teclaPressionada(e) {
            this.valor = e.key
        }
    }
})