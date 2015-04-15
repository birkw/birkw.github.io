<?php
$servername = "71500-2000218.mysql.crystone.se:3306";
$username = "2000218_xd89440";
$password = "apelsin123";
$dbname = "71500-2000218";

// Create connection
mysql_connect("servername", "username", "password") or die (mysql_error ());
mysql_select_db("myDB") or die(mysql_error());

$nummer = $_POST['nummer']);


$sql = "INSERT INTO mobilnummer (nummer)
VALUES ('$nummer')

?>