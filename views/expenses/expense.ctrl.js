app.controller('expensesCtrl', function($scope, $http) {
    
    $scope.newItem = {ex_date:new Date}

    $scope.checkExpense=function(item){
        if($scope.check_ex_date && item.ex_date) 
        {
            var item_date=new Date(item.ex_date).toDateString();
            var check_date=$scope.check_ex_date.toDateString();
            return item_date==check_date
        }
        
        return true
    }
   

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
            $scope.items.splice($index,1);
            totalSpent()
        })
    }

    $scope.addItem=function() {
        

        $scope.newItem.fdate = $scope.newItem.ex_date.toISOString();
 
        $http
        .post('api/expenses/create.php',$scope.newItem)
        .then(function(res){
            $scope.newItem.ex_id=res.data.ex_id;
            $scope.items.push($scope.newItem)        
            $scope.newItem = {ex_date:new Date}    
            totalSpent()
        })
       
    }

    function totalSpent(){
        var spent=0
        if($scope.items)
        $scope.items.forEach(function(d){
            spent+=(d.amount-0)
        })
        $scope.spent=spent;
    }

});
