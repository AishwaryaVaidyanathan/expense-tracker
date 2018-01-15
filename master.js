var app = angular.module('expenseTracker', ['ui.router']);


app.config(function ($locationProvider) {
    $locationProvider.html5Mode(true);
});

app.config(['$httpProvider', function ($httpProvider) {
    // Intercept POST requests, convert to standard form encoding
    $httpProvider.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
    $httpProvider.defaults.transformRequest.unshift(function (data, headersGetter) {
      var key, result = [];
  
      if (typeof data === "string")
        return data;
  
      for (key in data) {
        if (data.hasOwnProperty(key))
          result.push(encodeURIComponent(key) + "=" + encodeURIComponent(data[key]));
      }
      return result.join("&");
    });
  }]);

app.config(function ($stateProvider,$urlRouterProvider) {

    $stateProvider
        .state({
            name: 'login',
            url: '/',
            templateUrl: 'views/login/login.html'
        })
        .state({
            name: 'signup',
            url: '/signup',
            templateUrl: 'views/signup/signup.html'
        })
        .state({
            name: 'expenses',
            url: '/expenses',
            templateUrl: 'views/expenses/expenses.html'
        })
        .state({
            name: 'budget',
            url: '/budget',
            templateUrl: 'views/budget/budget.html'
        })

        $urlRouterProvider.otherwise('/');

});