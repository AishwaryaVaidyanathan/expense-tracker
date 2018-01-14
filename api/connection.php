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
        header('Content-Type: application/json');
        print json_encode(array("status"=>"401","msg"=>$msg )); 
    }

    function print_results($result){
        header('Content-Type: application/json');
        $rows = array();
        while($r = pg_fetch_assoc($result)) {
            $rows[] = $r;
        }
        print json_encode(array_values(pg_fetch_all($result)));

    }
?>