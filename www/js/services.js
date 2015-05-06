angular.module('starter.services', [])

.factory('Backend', ['$http', function($http) {
  return {
    getHome:function(){
      return $http.get('https://dl.dropboxusercontent.com/s/butrv6mpfweei7y/Cordova.json');
    }
  }
}]);