new Vue({
    el:"#app",
    data: {
        projectName: "Matador de Monstros",
        playerLife: 100,
        monsterLife: 100,
        running: false,
        logs: []
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
            this.monsterLife = 100,
            this.logs = []
        },

        attack(special) {
            this.hurt('playerLife', 7, 12, false, 'Player', 'Monster', 'player')

            if(this.monsterLife > 0)
                this.hurt('monsterLife', 5, 10, true, 'Monster', 'Player', 'monster')
        },

        hurt(attribute, min, max, special, source, target, cls) {
            const plus = special ? 5 : 0
            const hurt = this.getRandon(min + plus, max + plus)
            this[attribute] = Math.max(this[attribute] - hurt, 0)

            this.registerLog(`${source} hit ${target} with ${hurt}`, cls)
        },

        getRandon(min, max) {
            const value = Math.random() * (max - min) + min
            return Math.round(value)
        },

        healAndHurt() {
            this.heal(10, 15)
            this.hurt('playerLife', 7, 12, false, 'Monster', 'Monster', 'monster')
        },

        heal(min, max) {
            const heal = this.getRandon(min, max)
            this.playerLife = Math.min(this.playerLife + heal, 100)

            this.registerLog(`Player gained the strength of ${heal}`, 'player')
        },

        registerLog(text, cls) {
            this.logs.unshift({text, cls})
        }
    },
    watch: {
        hasResult(value) {
            if(value)  
                this.running = false
        }
    }
});