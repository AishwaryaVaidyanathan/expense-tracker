app.controller('loginCtrl', function($scope, $http, $state) {
    // $scope.user = {}
    $scope.login = function(){
        
        $http
        .post('api/users/login.php',$scope.user)
        .then(function(){
            $state.go('expenses')
        })
        .catch(function(err){
            $scope.err_msg=err.data.msg;
        })


    }
});
