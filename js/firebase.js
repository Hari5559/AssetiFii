// using firebase 8.9.7
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAiXyIwUNcoRRtGPO14Zq7K7LICwjbcPWw",
    authDomain: "assetifii.firebaseapp.com",
    projectId: "assetifii",
    storageBucket: "assetifii.appspot.com",
    messagingSenderId: "359789137575",
    appId: "1:359789137575:web:9b3cc8ba0012a9bd835582",
    measurementId: "G-30G6JC4YBW"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//firebase login
const provider = new firebase.auth.GoogleAuthProvider();
const auth = firebase.auth();

///////////////////// sign in and out functions /////////////////

function signinout() {
    if (firebase.auth().currentUser) {
        firebase.auth().signOut().then(() => {
            window.location.reload();
            console.log("signed out");
        }).catch(e => {
            console.log(e)
        })
    } else {
        firebase.auth().signInWithPopup(provider).then(res => {
            usr = res.user;
            console.log("signed in");
            setuserdata(usr.displayName, usr.photoURL, );
        }).catch(e => {
            console.log(e)
        })
    }
}

function setuserdata(name, imgsrc, profname, btnn) {
    document.getElementById('user_name').innerHTML = 'name: ' + name;
    document.getElementById('user_image').src = imgsrc;
    document.getElementById('user_level').innerHTML = 'level: ' + level;
    document.getElementById('user_goals').innerHTML = 'goals: ' + goals;
}