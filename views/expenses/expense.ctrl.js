app.controller('expensesCtrl', function($scope, $http) {
    
    $scope.newItem = {ex_date:new Date}
    var balance=0;

    $http
    .post('api/expenses/list.php')
    .then(function(res){
        $scope.items=res.data;
        $scope.items.forEach(d => {
            balance += (d.amount-0);    
            d.balance=balance;
        });
        
            
    })

    $http
    .post('api/budget/get.php')
    .then(function(res){
        $scope.budget=res.data.budget;    
    })

    $scope.addItem=function() {
        balance += $scope.newItem.amount;
        $scope.newItem.balance = balance;
        
        $scope.newItem.fdate = $scope.newItem.ex_date.toISOString();
 
        $http
        .post('api/expenses/create.php',$scope.newItem)
        .then(function(){
            $scope.items.push($scope.newItem)        
            $scope.newItem = {ex_date:new Date}    
        })
       
    }
});