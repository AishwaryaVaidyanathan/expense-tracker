<?php
require '../connection.php';
$sql= "
insert into expenses(item,amount,ex_date,u_id)
values(
    '$_REQUEST[name]',
    $_REQUEST[amount],
    '$_REQUEST[fdate]',
    $_SESSION[user_id]);
";
if(runSQL($sql))
{
    statusOK();
}
else{
    BadStatus("Record not inserted");
} 
?>