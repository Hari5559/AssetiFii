//////////////////////////// set the scores of user //////////////////////////////
function setscores(scoree) {

    var ref = firebase.database().ref('users/' + firebase.auth().currentUser.uid + '/scores/');
    ref.once('value', function(snapshot) {
        var scores = snapshot.val();
        if (scores == null) {
            scores = [];
            scores.push({
                score: 0,
                level: 0,
            });
        } else {
            oldscore = scores.score % 100;
            console.log(oldscore);
            scores.score += scoree;
            var newscore = scores.score % 100;
            console.log(newscore);
            if (newscore > oldscore) {
                scores.level += 1;
            }


            var ref = firebase.database().ref('users/' + firebase.auth().currentUser.uid + '/scores/');
            ref.push({
                socre: sscore,
                level: llevel,
            });


        }
        localStorage.setItem('scores', JSON.stringify(scores));
        id('score').innerHTML = scores.score;
        id('level').innerHTML = scores.level;
    })
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
    for (var i = 1; i < quotes.length; i++) {
        stockdata += '<li class="list-group-item"><div class="stcknme">' + quotes[i].shortname + ' </div> <div class="stckscre">Score:' + quotes[i].score + '</div></li>';
    }
    id('stocklist').innerHTML = stockdata;
}