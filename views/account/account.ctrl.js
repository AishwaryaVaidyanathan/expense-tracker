app.controller('', function($scope, $http, $state) {
    // $scope.user = {}
    $scope.login = function(){
        $http
        .post('api/expenses/account.php')
        .then(function(res){
            $scope.items=res.data;
            Spent()       
        }) 
       
        .catch(function(err){
            $scope.err_msg=err.data;
        })


    }
    function Spent(){
        var spent=0
        $scope.items.forEach(function(d){
            spent+=(d.amount-0)
        })
        $scope.spent=spent;
    }

});

