var app = angular.module('AdminApp', ["ngRoute"])


// AngularJS Routing

app.config(function($routeProvider) {
  $routeProvider
    .when("/", {
      templateUrl: 'view/home.html'
    })
    .when("/category", {
      templateUrl: 'view/category.html'
    })
});

// Category Controller

app.controller('CategoryCtrl', ($scope, Category)=>{
  $scope.category = Category.read()
  $scope.remove = (index)=>{
    $scope.category.splice(index, 1)
  }
  $scope.add = ()=>{
    Category.create($scope.NewCategory)
    $scope.NewCategory = ""
  }
  $scope.edit = (index)=>{
    var dialog = document.querySelector('dialog');
    dialog.showModal();
    dialog.querySelector('.close').addEventListener('click',()=> {
      dialog.close();
    });
    $scope.EditCategory = $scope.category[index]
    $scope.position = index
  }
  $scope.position = 0
  $scope.change = ()=>{
    $scope.category[$scope.position] = $scope.EditCategory
    var dialog = document.querySelector('dialog')
    dialog.close()
  }
})


// Category Factory

app.factory('Category', ($http)=>{
  var factory = {}
  var category = ["Electronic", "Grocery", "Books", "Toys", "Beauty Products"]
  
  // Get Category
  factory.read = ()=>{
    return category
  }
  
  factory.create = (categoryName)=>{
    category.push(categoryName)
  }
  
  return factory;
})


