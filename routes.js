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
        .state({
            name: 'account',
            url: '/account',
            templateUrl: 'views/account/account.html'
        })

        $urlRouterProvider.otherwise('/');

});