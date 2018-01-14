<?php
require '../connection.php';
$sql= "
insert into users
(name,email,password) 
values 
('$_REQUEST[name]','$_REQUEST[email]',md5('$_REQUEST[password]'));
";

    if(runSQL($sql))
    {
        statusOK();
    }
    else{
        BadStatus("Duplicate user");
    } 
?>