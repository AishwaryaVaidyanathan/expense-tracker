app.controller('loginCtrl', function($scope, $http, $state) {
    // $scope.user = {}
    $scope.login = function(){
        
        $http
        .post('api/users/login.php',$scope.user)
        .then(function(){
            location.href='./expenses';
        })
        .catch(function(err){
            console.log(err.data)
            $scope.err_msg=err.data.msg;
        })


    }
});
