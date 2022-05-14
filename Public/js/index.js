////////////////// to be called on page load //////////////////////////
var j = 0;
carouselcall();
checkAuthState();

///////////////// Helper Functions /////////////////////////////////////////////

function id(item) {
    return document.getElementById(item);
}

function classes(item) {
    return document.getElementsByClassName(item);
}


/////////////////// Function for changing Functions  ////////////////////////////

function changeapplet(page) {
    var applets = classes("appbody");
    for (var i = 0; i < applets.length; i++) {
        applets[i].style.display = "none";
    }
    id(page).style.display = "block";
}

////////////////// function for wallpaper carousel  ///////////////////////////////

function carouselcall() {
    setInterval(function() {
        var carimgs = classes("carousal-image");
        for (i = 0; i < carimgs.length; i++) {
            carimgs[i].style.display = "none";
        }
        carimgs[j].style.display = "block";
        j = j % 3 + 1;
    }, 4000);

}

////////////////// Function to show or hide the quiz cards  //////////////////////////
function showhide(code) {
    item = id(code);
    if (item.style.display == "none") {
        item.style.display = "block";
        return
    }
    item.style.display = "none";
}