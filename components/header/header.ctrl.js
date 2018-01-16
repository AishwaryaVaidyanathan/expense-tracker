app.controller('headerCtrl', function($scope, $http, $state) {
    $scope.user = {}

    $http
    .post('api/users/get.php',$scope.user)
    .then(function(resp){
        $scope.user=resp.data;
    })
})