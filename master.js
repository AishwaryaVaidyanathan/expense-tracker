var app = angular.module('expenseTracker', ['ui.router']);


app.config(function ($stateProvider, $locationProvider) {
    $locationProvider.html5Mode(false);
});


app.config(function ($stateProvider, $locationProvider) {


    var loginState = {
        name: 'login',
        url: '/',
        templateUrl: 'templates/login.html'
    }
    $stateProvider.state(loginState);

    var expensesState = {
        name: 'expenses',
        url: '/expenses',
        templateUrl: 'templates/expenses.html'
    }

    $stateProvider.state(expensesState);


});

app.controller('expensesCtrl', function($scope) {
    $scope.items = []
    $scope.newItem = {date:new Date}
    var balance=0;
    $scope.addItem=function() {
        balance += $scope.newItem.amount;
        $scope.newItem.balance = balance;
        $scope.items.push($scope.newItem)        
        $scope.newItem = {date:new Date}
    }

 
});


