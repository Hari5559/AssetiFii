//////////////////////////// set the scores of user //////////////////////////////
function setscores() {
    // set default values if score is not present
    var intref = firebase.database().ref('users/' + firebase.auth().currentUser.uid);
    intref.once('value', function(snapshot) {
        var user = snapshot.val();
        if (user.score == undefined) {
            intref.set({
                score: 0,
                level: 0,
                goals: 0
            });
        }
    });

    var ref = firebase.database().ref('users/' + firebase.auth().currentUser.uid + '/scores/');


    ref.once('value', function(snapshot) {
        var scores = snapshot.val();
        if (scores.score == null) {
            ref.set({
                score: 0,
                level: 0,
                goals: 0
            });
        }
        document.getElementById('score').innerHTML = 'score: ' + scores.score;
        document.getElementById('level').innerHTML = 'level: ' + scores.level;
        document.getElementById('goals').innerHTML = 'goals: ' + scores.goals;
    });
}




////////////////////////// update the score of user //////////////////////////////
function updatescore(sc) {

    var ref = firebase.database().ref('users/' + firebase.auth().currentUser.uid + '/scores/');
    ref.once('value', function(snapshot) {
        var scores = snapshot.val();
        var oldscore = scores.score % 100;
        scores.score += sc;
        var newscore = scores.score % 100;
        if (newscore > oldscore) {
            scores.level += 1;
        }
        ref.update(scores);


    });

}

////////////////////////////// add the expence of user //////////////////////////////







///////////////////// fetch Stock Data /////////////////////////////////
/*
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
    for (var i = 1; i < quotes.length; i++) {
        stockdata += '<li class="list-group-item"><div class="stcknme">' + quotes[i].shortname + ' </div> <div class="stckscre">Score:' + quotes[i].score + '</div></li>';
    }
    id('stocklist').innerHTML = stockdata;
}
*/