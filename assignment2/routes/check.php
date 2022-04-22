<?php
$login = filter_var(trim($_POST['login']),
FILTER_SANITIZE_STRING);
$pass = filter_var(trim($_POST['pass']),
    FILTER_SANITIZE_STRING);
$rptPass = filter_var(trim($_POST['rptPass']),
    FILTER_SANITIZE_STRING);

$mysql = new mysqli('localhost','root','','register-bg');
$mysql ->query("INSERT INTO `users` (`login`, `pass`, `rptPass`)
VALUES('$login', '$pass', '$rptPass')");
$mysql-> close();