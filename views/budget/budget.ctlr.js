app.controller('budgetCtrl', function($scope,$http,$state) {
    // $scope.user = {}
    $scope.acceptBudget = function(){
        
        
        $http
        .post('api/users/budget.php',$scope.budget)
        .then(function(){
            $state.go('expenses')
        })



    }
});