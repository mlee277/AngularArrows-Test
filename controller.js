angular
  .module('MyApp', ['ngRoute'])
  .controller('MyController', ['$scope', 'MyFactory', myController]);

function myController($scope, MyFactory) {
  $scope.name = "Bryan";
  $scope.movie = "";
  $scope.getMovie = function() {
    console.log('hi');
    $scope.name = $scope.movie;
    $scope.movie = "";
  };
}
