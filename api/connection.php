<?php
error_reporting(E_ERROR | E_PARSE);
session_start();

$host        = "host=127.0.0.1";
   $port        = "port=5432";
   $dbname      = "dbname=expense-tracker";
   $credentials = "user=postgres password=postgres";

   $db = pg_connect("$host $port $dbname $credentials");
   if(!$db) {
      echo "Error : Unable to connect to database\n";
      exit();
   }

   function runSql($sql)
    {
            return pg_query($sql); 
    }

    function statusOK()
    {
        header('Content-Type: application/json');
        print json_encode(array("status"=>"ok")); 
    }

    function BadStatus($msg)
    {
        http_response_code(401);
        header('Content-Type: application/json');
        print json_encode(array("status"=>"401","msg"=>$msg )); 
    }

    function print_results($result,$single){
        header('Content-Type: application/json');
        if($single)
            print json_encode(pg_fetch_assoc($result));
        else
            print json_encode(pg_fetch_all($result));

    }
?>