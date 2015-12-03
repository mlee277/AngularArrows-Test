angular
  .module('myApp')
  .controller('myController', myController);

myController.$inject = ['$scope','$http', 'myFactory'];

function myController($scope, $http, myFactory) {
  $scope.name = "Bryan";
  $scope.movie = "";
  console.log(myFactory.getMovie);
  $scope.getMovie = function() {
    $scope.name = $scope.movie;
    $scope.movie = "";
  };
}
