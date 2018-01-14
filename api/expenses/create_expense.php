<?php
require '../connection.php';
$sql= "
insert into expenses(item,amount,ex_date,u_id)
values(
    '$_REQUEST[item]',
    '$_REQUEST[amount]',
    '$_REQUEST[ex_date]',
    '$_SESSION[user_id]');
"; 
if(runSQL($sql))
{
    statusOK();
}
else{
    BadStatus("Record not inserted");
} 
?>
