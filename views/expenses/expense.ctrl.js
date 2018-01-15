app.controller('expensesCtrl', function($scope, $http) {
    
    $scope.newItem = {ex_date:new Date}

   

    $http
    .post('api/expenses/list.php')
    .then(function(res){
        $scope.items=res.data;
        totalSpent()       
    })

    $http
    .post('api/budget/get.php')
    .then(function(res){
        $scope.budget=res.data.budget;
        totalSpent()    
    })

    $scope.deleteItem=function($index,item) {
        $http
        .post('api/expenses/delete.php',item)
        .then(function(){
            $scope.items.splice(0,$index);
            totalSpent()
        })
    }

    $scope.addItem=function() {
        

        $scope.newItem.fdate = $scope.newItem.ex_date.toISOString();
 
        $http
        .post('api/expenses/create.php',$scope.newItem)
        .then(function(){
            $scope.items.push($scope.newItem)        
            $scope.newItem = {ex_date:new Date}    
            totalSpent()
        })
       
    }

    function totalSpent(){
        var spent=0
        $scope.items.forEach(function(d){
            spent+=(d.amount-0)
        })
        $scope.spent=spent;
    }

});