app.controller('signupCtrl', function($scope, $http, $state) {
    // $scope.user = {}

    $scope.createUser = function(){
        if($scope.user.password!=$scope.cpassword)
            return
        $scope.err_msg="";
        
        $http
        .post('api/users/create.php',$scope.user)
        .then(function(){
            $state.go('login')
        })
        .catch(function(err){
            $scope.err_msg=err.data.msg;
        })


    }
});