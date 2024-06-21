let bowling = {

    players: [
        { name: 'Livio', scores: [] },
        { name: 'Paola', scores: [] },
        { name: 'Filippo', scores: [] },
        { name: 'Giuseppe', scores: [] }
    ],

    generaPunti: function () {
        this.players.forEach(player => {
            for (let i = 0; i < 10; i++) {
                let score = Math.floor(Math.random() * (10 - 1 + 1) + 1);
                player.scores.push(score);
            }
        });
    },

    calcoloTotalePunti: function () {
        this.players.forEach(player => {
            player.totalScore = player.scores.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
        });
    },

    ordinaGiocatori: function () {
        this.players.sort((a, b) => b.totalScore - a.totalScore);
    },

    mostraPunteggi: function () {
        this.players.forEach(player => {
            console.log(player.name + ": " + player.scores + " (Total: " + player.totalScore + ")");
        });
    }
};


bowling.generaPunti();

bowling.calcoloTotalePunti();


bowling.ordinaGiocatori();


bowling.mostraPunteggi();
