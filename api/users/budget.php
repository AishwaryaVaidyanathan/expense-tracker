<?php
require '../connection.php';
if($_REQUEST['action']=="set")
{
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
}

if($_REQUEST['action']=="get")
{
    $sql= "
    select budget from users 
    WHERE u_id=$_SESSION[user_id]
    ";
        
    if($result=runSQL($sql))
    {
        print_results($result,true);
    }
    

}
?>