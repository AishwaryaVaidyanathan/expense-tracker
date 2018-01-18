<?php
require '../connection.php';

    $sql= "
    select  ex_id,item,amount,ex_date from expenses 
    WHERE u_id=$_SESSION[user_id]
    ";
        
    if($result=runSQL($sql))
    {
        print_results($result,false);
    }
?>