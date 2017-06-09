<?php

  ini_set('display_errors', 1);
  ini_set('display_startup_errors', 1);
  error_reporting(E_ALL);

  //CAPTURA DE VARIABLES
  $nombre = $_POST['nombre'];
  $correo = $_POST['correo'];
  $body = $_POST['mensaje'];

  if($nombre == "" || $correo == "" || $body == ""){
    echo "Error: Faltan datos para el envío de correo.";
  }else{
    $to      = 'joshe.sonido@gmail.com';
    $subject = 'Envío de Contacto Web Estudio Lastarria';
    $message = "Nombre: ".$nombre."
"."Correo Electrónico: ".$correo."
"."Mensaje Contacto:

".$body;
    $headers = 'From: webmaster@estudiolastarria.cl' . "\r\n" .
      'X-Mailer: PHP/' . phpversion();


    mail($to, $subject, $message, $headers);
  }

 ?>
