'use strict';

/**
 * @ngdoc function
 * @name ejeTecnicoApp.service:ExampleService
 * @description
 * # ExampleService
 * Controller of the ejeTecnicoApp
 */
angular.module('ejeTecnicoApp')
  .factory('ExampleService',['UtilService','$http','$q', function (UtilService, $http, $q) {
      var example = {};
      var deferred = $q.defer();

      example.get_departamento_data =  function() {
        return $http.get('txtUbigeo.txt')
                .then(function(data) {
                    var ubigeo_json = UtilService.formatUbigeo(data);
                    deferred.resolve(ubigeo_json);
                    return deferred.promise;
                }, function() {
                    deferred.reject();
                    return deferred.promise;
                });  			
      }
      return example;
  }]);
