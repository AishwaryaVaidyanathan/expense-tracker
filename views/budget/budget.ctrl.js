app.controller('budgetCtrl', function($scope,$http,$state) {
    // $scope.user = {}
    $scope.acceptBudget = function(){
        
        
        $http
        .post('api/budget/set.php',{budget:$scope.budget})
        .then(function(){
            $state.go('expenses')
        })



    }
});