//color en los botones

var enlaces = document.querySelectorAll('.lists li a');

enlaces.forEach((element) => {
    element.addEventListener('click', (event) => {
        enlaces.forEach((link) => {
            link.classList.remove('activo');
        });

        event.target.classList.add('activo');

    });
});

//ocultar y mostrar header

var menuContent = document.querySelector('.cabeza');
var prevScrollPos = window.pageYOffset;
var goTop = document.querySelector('.go-top');

window.onscroll = () => {

    let currentScrollPos = window.pageYOffset;

    if (prevScrollPos > currentScrollPos) {
        menuContent.style.top = '0px';
        menuContent.style.transition = '0.5s';
    } else {
        menuContent.style.top = '-60px';
        menuContent.style.transition = '0.5s';
    }
    prevScrollPos = currentScrollPos;

}