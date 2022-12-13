new Vue({
    el:"#app",
    data: {
        projectName: "Matador de Monstros",
        playerLife: 100,
        monsterLife: 100,
        running: false
    },
    computed: {
        hasResult() {
            return this.playerLife == 0 || this.monsterLife == 0
        }
    },
    methods: {
        startGame() {
            this.running = true,
            this.playerLife = 100,
            this.monsterLife = 100
        },

        attack(special) {
            this.hurt('playerLife', 7, 12, false)
            this.hurt('monsterLife', 5, 10, true)
        },

        hurt(attribute, min, max, special) {
            const plus = special ? 5 : 0
            const hurt = this.getRandon(min + plus, max + plus)
            this[attribute] = Math.max(this[attribute] - hurt, 0)
        },

        getRandon(min, max) {
            const value = Math.random() * (max - min) + min
            return Math.round(value)
        }
    },
    watch: {
        hasResult(value) {
            if(value)  
                this.running = false
        }
    }
});