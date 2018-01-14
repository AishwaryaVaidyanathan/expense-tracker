<?php
require '../connection.php';
$sql= "
select u_id,name from users
 where 
 email='$_REQUEST[email]' 
 and 
 password=md5('$_REQUEST[password]');
";
    if($result=runSQL($sql))
    {
        $result=pg_fetch_row($result);        
        $_SESSION['user_id']=$result[0];
        $_SESSION['name']=$result[1];
        statusOK();
    }
    else
    {
        BadStatus("Invalid email or password");
    } 
?>


