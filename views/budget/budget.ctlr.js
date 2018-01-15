app.controller('budgetCtrl', function($scope,$http,$state) {
    // $scope.user = {}
    $scope.acceptBudget = function(){
        
        
        $http
        .post('api/users/budget.php',{budget:$scope.budget,action:'set'})
        .then(function(){
            $state.go('expenses')
        })



    }
});