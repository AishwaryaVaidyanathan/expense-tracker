<?php
require '../connection.php';
    $sql= "
    UPDATE users 
    SET budget=$_REQUEST[budget]  
    WHERE u_id=$_SESSION[user_id]
    ";
    if($result=runSQL($sql))
    {
        statusOK();
    }
    else
    {
        BadStatus("Budget not updated");
    }
?>