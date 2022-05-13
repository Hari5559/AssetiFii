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