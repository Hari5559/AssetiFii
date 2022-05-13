const submenu = document.querySelector('.sub-menu');
const navLinks = document.querySelector('#quizlinks');
const links = document.querySelectorAll('#quizlinks li');
var a;


submenu.addEventListener('click', () => {

    navLinks.classList.toggle('show');

    links.forEach(link => {
        link.addEventListener('click', collapse);


    });
});


function collapse() {
    navLinks.classList.remove('show');

}