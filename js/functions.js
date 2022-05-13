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

function addexpence() {
    var amt = document.getElementById('amt').value;
    var cat = document.getElementById('spndcat').value;
    var ref = firebase.database().ref('users/' + user.uid + '/expences/');
    ref.push({
        amt: amt,
        cat: cat,
    });
}