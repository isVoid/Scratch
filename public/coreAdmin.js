var login = angular.module('Admin', [])

login.controller("loginCtrl", function($scope, $http) {

  $scope.msg = ""

  $scope.submit = function() {
    $http.post('http://localhost:3000/api/users/login', {
      name : $scope.username,
      password : $scope.password
    }).then(function(succResponse) {
      $scope.msg = "Login is success. Welcome, " + succResponse.data.username
    }, function(failResponse) {
      $scope.msg = "Username or password error."
    })

  }

})

login.controller("regCtrl", function($scope, $http) {

  $scope.msg = ""

  $scope.submit = function() {
    $http.post('http://localhost:3000/api/users/reg', {
      name : $scope.username,
      password : $scope.password
    }).then(function(succResponse) {
      $scope.msg = "Register success. " + succResponse.data.welcomeMsg
    }, function(failResponse) {
      $scope.msg = "User Exists, pick another name!"
    })
  }

})
