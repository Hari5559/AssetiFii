window.onload = function() {
        checkAuthState();
    }
    // using firebase 8.9.7
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAiXyIwUNcoRRtGPO14Zq7K7LICwjbcPWw",
    authDomain: "assetifii.firebaseapp.com",
    projectId: "assetifii",
    storageBucket: "assetifii.appspot.com",
    messagingSenderId: "359789137575",
    appId: "1:359789137575:web:9b3cc8ba0012a9bd835582",
    measurementId: "G-30G6JC4YBW",
    databaseURL: "https://assetifii-default-rtdb.asia-southeast1.firebasedatabase.app"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//firebase login
const provider = new firebase.auth.GoogleAuthProvider();
const auth = firebase.auth();

// check the authentication states, and oerform functions accordingly.

function checkAuthState() {
    firebase.auth().onAuthStateChanged(user => {
        if (user) {
            setscores();
            setuserdata(user.displayName, user.photoURL);
            document.getElementById('userdata').style.display = "block";
            document.getElementById('divlogn').style.display = "none";


        } else {
            console.log("Sign in to use the full features of the app")
            document.getElementById('userdata').style.display = "none";
            document.getElementById('divlogn').style.display = "block";
        }
    })
}

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
            setuserdata(usr.displayName, usr.photoURL);
        }).catch(e => {
            console.log(e)
        })
    }
}

function setuserdata(name, imgsrc, level, goals) {
    document.getElementById('user_name').innerHTML = 'name: ' + name;
    document.getElementById('user_image').src = imgsrc;
}