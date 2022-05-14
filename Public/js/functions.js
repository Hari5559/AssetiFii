//////////////////////////// set the scores of user //////////////////////////////
function setscores() {
    var ref = firebase.database().ref('users/' + firebase.auth().currentUser.uid + '/scores/');

    ref.once('value', function(snapshot) {
        var scores = snapshot.val();
        console.log(scores);
        document.getElementById('score').innerHTML = 'score: ' + scores.score;
        document.getElementById('level').innerHTML = 'level: ' + scores.level;
        document.getElementById('goals').innerHTML = 'goals: ' + scores.goals;
    });
}




////////////////////////// update the score of user //////////////////////////////
function updatescore(sc, lv, g) {

    var ref = firebase.database().ref('users/' + user.uid + '/scores/');
    ref.once('value', function(snapshot) {
        var scores = snapshot.val();
        scores.score += sc;
        scores.level += lv;
        scores.goals += g;
        ref.set({
            score: score,
            level: level,
            goals: goals,
        });

    });

}

////////////////////////////// add the expence of user //////////////////////////////







///////////////////// fetch Stock Data /////////////////////////////////
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Host': 'yh-finance.p.rapidapi.com',
        'X-RapidAPI-Key': '4765478682mshd45354dbd80fffep1c18c4jsnf34147d76223'
    }
};

fetch('https://yh-finance.p.rapidapi.com/auto-complete?q=india&region=IN', options)
    .then(response => response.json())
    .then(response => showstockdata(response))
    .catch(err => console.error(err));

/////////////////////////////////// set stock  /////////////////////////////////////
function showstockdata(data) {
    var quotes = data.quotes;
    var stockdata = '';
    for (var i = 0; i < quotes.length; i++) {
        stockdata += '<li class="list-group-item"><div class="stcknme">' + quotes[i].shortname + ' </div> <div class="stckscre">Score:' + quotes[i].score + '</div></li>';
    }
    id('stocklist').innerHTML = stockdata;
}