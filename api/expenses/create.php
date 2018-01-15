<?php
require '../connection.php';
$sql= "
insert into expenses(item,amount,ex_date,u_id)
values(
    '$_REQUEST[item]',
    $_REQUEST[amount],
    '$_REQUEST[fdate]',
    $_SESSION[user_id])
    RETURNING ex_id

";
if($result=runSQL($sql))
{
    print_results($result,true);
}
else{
    BadStatus("Record not inserted");
} 
?>
