<?php

$headers = "Content-Type: text/html; charset=UTF-8";

$destinatario = "joaquinemayer@gmail.com";

$asunto = "Contacto desde página web";

$mensaje = "Nombre:$_GET[nombre] \n";
$mensaje .= "Correo Electrónico: $_GET[email] \n";
$mensaje .= "Mensaje:$_GET[mensaje] \n";

$mensaje = wordwrap($mensaje, 70, "\r\n");

$enviado = mail($destinatario, $asunto, $mensaje, $headers);

if ($enviado) {
    header("location:contacto.html");
} else {
    header("location:contacto.html");
}
