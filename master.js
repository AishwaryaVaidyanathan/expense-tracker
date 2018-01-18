var app = angular.module('expenseTracker', ['ui.router']);


app.config(function ($locationProvider) {
    $locationProvider.html5Mode(true);
});

app.config(function ($httpProvider) {
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
  });

