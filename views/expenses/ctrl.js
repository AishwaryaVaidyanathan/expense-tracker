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