carouselcall();


function changeapplet(page) {
    var applets = document.getElementsByClassName("appbody");
    for (var i = 0; i < applets.length; i++) {
        applets[i].style.display = "none";
    }
    document.getElementById(page).style.display = "block";
}

var j = 0;

function carouselcall() {
    setInterval(function() {
        car();
        j = j % 3 + 1;
    }, 1000);

}

function car() {
    var carimgs = document.getElementsByClassName("caa");
    for (i = 0; i < carimgs.length; i++) {
        carimgs[i].style.display = "none";
    }
    carimgs[j].style.display = "block";
}

carouselcall();