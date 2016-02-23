<?php  
$host = $_SERVER["HTTP_HOST"];
echo $host;
header( 'Location: https://vast-tor-66111.herokuapp.com/dist/src/index.html' ) ;  
exit;
?>
