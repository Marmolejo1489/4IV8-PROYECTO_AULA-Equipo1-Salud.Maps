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

//Inicia parte del formulario*//

  function validar(formulario){

    if(formulario.nombre.value.length < 2){
        alert("Por favor escribe mas de 2 caracteres en el campo nombre");
        formulario.nombre.focus();
    return false;
    }

    

    var checkOk = "QWERTYUIOPASDFGHJKLÑZXCVBNM" 
    + "qwertyuioasdfghjklzxcvbnm";

    var checkStr = formulario.nombre.value;

    var allValid = true;

    for(var i = 0; i < checkStr.length; i++){
        var ch = checkStr.charAt(i);
        for( var j = 0; j < checkOk.length; j++)
        if(ch == checkOk.charAt(j))
            break;
        
        if(j == checkOk.length){
            allValid = false;
            break;
        }
    }

    if(!allValid){
        alert("Escribe solo letras en el campo Nombre");
        formulario.nombre.focus();
        return false;
    }

    /*
    validar solo numeros
    */

    var checkOk = "1234567890";

    var checkStr = formulario.edad.value;

    var allValid = true;

    for(var i = 0; i < checkStr.length; i++){
        var ch = checkStr.charAt(i);
        for( var j = 0; j < checkOk.length; j++)
        if(ch == checkOk.charAt(j))
            break;
        
        if(j == checkOk.length){
            allValid = false;
            break;
        }
    }

    if(!allValid){
        alert("Escribe solo numeros en el campo Edad");
        formulario.edad.focus();
        return false;
    }

    /*
    validar correo electronico
    Expresiones regulares
    a poder diferenciar una cadena de caracteres
    y definir que caracteres son validos de acuerdo
    a una condicion
    */

    var txt = formulario.email.value;

    //expresion regular
    //algo@algo.com
    //algo@algo.algo.com
    var b = /^[^@\s]+@[^@\.\s]+(\.[^@\.\s]+)+$/;

    alert("Email" + (b.test(txt)?"":" no ") + " valido");
    return b.test(txt);

}