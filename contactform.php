<?php
$name = $_POST['Name'];
$email = $_POST['Email'];
$text = $_POST['Subject'];

$mailTo = "hajongawe@gmail.com";
$headers = "From: ".$email;
$txt = "You have received an e-mail from ".$name."\n\n".$text;
mail($mailTo, $headers, $txt) or die("Error!");
header("Location:index.html");
?>