<?php  
$host = $_SERVER["HTTP_HOST"];
echo $host;
header( 'Location: https://dkapmstatic.herokuapp.com/dist/src/index.html' ) ;  
exit;
?>