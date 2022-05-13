function changeapplet(page) {

    console.log(page);
    var applets = document.getElementsByClassName("appbody");
    for (var i = 0; i < applets.length; i++) {
        applets[i].style.display = "none";
    }
    document.getElementById(page).style.display = "block";
}