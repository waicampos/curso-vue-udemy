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

    },
    watch: {

    }
});