<?php
require '../connection.php';
    $sql= "
    select item,amount,ex_date from expenses 
    WHERE u_id=$_SESSION[user_id] and ex_date= '$_REQUEST[fdate]'
    ";
    if($result=runSQL($sql))
    {
        statusOK();
    }
    else
    {
        BadStatus("Expenses have not been done");
    }
?>