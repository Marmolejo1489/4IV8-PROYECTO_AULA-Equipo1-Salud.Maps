<%-- 
    Document   : registroUsuario
    Created on : 23/05/2021, 01:17:29 AM
    Author     : aza06
--%>

<%@page contentType="text/html" pageEncoding="UTF-8" session="true" %>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" href="img/icon.png" type="image/png">
    <link rel="stylesheet" href="style.css">
    <title>Salud.Maps | RegistroExitoso</title>
    </head>
    <body>
        <header>
       <ul>
           <li><img src="img/logo_lateral_negro.png" alt="El logo del servicio."></li>
           <li><a href="index.jsp"><b>Buscar</b></a></li>
       </ul> 
    </header>
        <!--Este jsp no se muy bien que hace
        -->
        <div class="cuadro_texto">
        <h1>Registro de Usuario Exitoso</h1>
        <%
            HttpSession sesionCliente = request.getSession();
            
            //si es de una bd el metodo de verificarusuario(String user, Strig pass)
            //haces una instancias del usuario
                                                  //e.usuario  
            sesionCliente.setAttribute("Usuario", "e.usuario");
            %>
        <br>
        
        <h3>Bienvenido</h3>
        <h3>Inicie sesión para acceder a la función de favoritos.</h3>
        <br>
        </div>
             <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
        <footer>
            <div class="container-footer-all">
                <div class="container-body">
                    <div class="colum1">
                        <h1>Información de la compañía</h1>
                        <a href="./quienes.html">Quiénes somos</a>
                    </div>
                    <div class="colum2">
                        <h1>Matriz</h1>
                        <div class="row2">
                            <img src="img/house.png">
                            <label>Centro de Estudios Científicos y Tecnológicos
                                9 Juan de Dios Bátiz
                            </label>
                        </div>
                    </div>
                    <div class="colum3">
                        <h1>Datos de contacto</h1>
                        <div class="row2">
                            <img src="img/smartphone.png">
                            <label>+52 1 55 7895 2487</label>
                        </div>
                        <div class="row2">
                            <img src="img/contact.png">
                            <label>equipodosmasuno@gmail.com</label>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container-footer">
                <div class="footer">
                    <div class="copyright">
                        © 2021 Todos los Derechos Reservados | <b>Data Jockey</b>
                    </div>
                </div>
            </div>
        </footer>
    </body>
</html>
