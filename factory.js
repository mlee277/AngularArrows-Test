angular
  .module('myApp')
  .factory('myFactory', myFactory);

myFactory.$inject = ['$http'];

function myFactory($http) {
  return {
    getMovie: getMovie
  };
}

function getMovie() {
  return $http.get('http://www.omdbapi.com/?t=frozen&y=&plot=short&r=json')
        .then(getMovieComplete)
        .catch(getMovieFailed);
  function getMovieComplete(response) {
    console.log(response);
    return response;
  }
  function getMovieFailed(error) {
    console.log(error);
    // logger.error('ERROR:' + error);
  }
}
