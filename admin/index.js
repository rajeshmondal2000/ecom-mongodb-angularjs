var app = angular.module('AdminApp', ["ngRoute"])

// AngularJS Routing

app.config(function($routeProvider) {
  $routeProvider
    .when("/", {
      templateUrl: 'view/home.html'
    })
    .when("/", {
      templateUrl: 'view/category.html'
    })
});

// Category Controller

app.controller('CategoryCtrl', ($scope, $http, Category)=>{
  $http.get("https://basirhat-2019.firebaseio.com/message.json").then(function(response) {
    $scope.result = response.data;
  });
  
})


// Category Factory

app.factory('Category', ($http)=>{
  var factory = {}
  var category = []
  
  // Get Category
  factory.getCategory = ()=>{
    $http.get("https://basirhat-2019.firebaseio.com/resturant/users.json").then(function(response) {
        
    });
  }
  
  return factory;
})


