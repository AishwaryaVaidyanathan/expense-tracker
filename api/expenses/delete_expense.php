<?php
require '../connection.php';
$sql= "delete from expenses 
where 
u_id=$_SESSION[user_id] 
and 
ex_id=$_REQUEST[ex_id]
"; 
if(runSQL($sql))
{
    statusOK();
}
else{
    BadStatus("Record not deleted");
} 
?>