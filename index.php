<?php
require 'api/connection.php';
?>

<!DOCTYPE html>
<html class="no-js">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <title>Expense tracker</title>
    <base href="/expense-tracker/">
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width">


    <link href="lib/bootstrap.no-icons.min.css" rel="stylesheet">
    <link href="master.css" rel="stylesheet">
</head>


<body ng-app="expenseTracker">

    <div ng-include="'components/header/header.html'"></div>
   
    <div class="container main-body">
        <ui-view></ui-view>
    </div>
    <div ng-include="'components/footer/footer.html'"></div>

    <script src="lib/angular.min.js"></script>
    <script src="lib/angular-ui-router.min.js"></script>
    <script src="master.js"></script>
    <script src="routes.js"></script>
    <script src="views/login/login.ctrl.js"></script>
    <script src="views/signup/signup.ctrl.js"></script>
    <script src="views/budget/budget.ctrl.js"></script>
    <script src="views/expenses/expense.ctrl.js"></script>
    <script src="components/header/header.ctrl.js"></script>
    <!--<script src="api/logout.php"></script>-->

</body>

</html>