///////////////// Helper Functions /////////////////////////////////////////////

function id(item) {
    return document.getElementById(item);
}

function classes(item) {
    return document.getElementsByClassName(item);
}

function submitquiz(quizid) {
    //get answers from firebase
    var answers = [];
    var answersRef = firebase.database().ref('quizzes/' + quizid + '/answers');
    answersRef.once('value', function(snapshot) {
        snapshot.forEach(function(childSnapshot) {
            var childKey = childSnapshot.key;
            var childData = childSnapshot.val();
            console.log(childKey + ": " + childData);
            answers.push(childData);
        });
    });

    var questions = classes("quizquestion");
    var score = 0;
    for (var i = 0; i < questions.length; i++) {

        var question = id('question2');
        console.log('question' + (i + 1));
        console.log(question.value);
        if (question.value == answers[i]) {
            score++;
            console.log("correct");
        }
    }
    id("scorecard").innerHTML = "You scored " + score + " out of " + questions.length;
}