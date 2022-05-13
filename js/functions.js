function setscores() {
    console.log("setscores");
    var ref = firebase.database().ref('users/' + firebase.auth().currentUser.uid + '/scores/');
    ref.once('value', function(snapshot) {
        var scores = snapshot.val();
        var scorelist = "";
        console.log(scores);
        for (var key in scores) {
            var score = scores[key].score;
            if (score == "") {
                score = "0";
            }
            scorelist += '<div class="score-item"><p class="score-content">' + score + '</p></div>';
        }
        document.getElementById("scorelist").innerHTML = scorelist;
    });
}