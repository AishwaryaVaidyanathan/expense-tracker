<?php
require '../connection.php';
    $sql= "
    select name from users 
    WHERE u_id=$_SESSION[user_id]
    ";
        
    if($result=runSQL($sql))
    {
        print_results($result,true);
    }
?>