<?php
  require 'connection.php';
  session_unset();
    session_destroy();
    header("Location:/expense-tracker/");
?>