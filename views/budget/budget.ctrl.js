app.controller('budgetCtrl', function($scope,$http,$state) {
    // $scope.user = {}
    $http
    .post('api/budget/get.php')
    .then(function(res){
        $scope.budget=res.data.budget;  
    })
    $scope.acceptBudget = function(){
        
        
        $http
        .post('api/budget/set.php',{budget:$scope.budget})
        .then(function(){
            $state.go('expenses')
        })
    }
});