'use strict';

/**
 * @ngdoc function
 * @name ejeTecnicoApp.service:ExampleService
 * @description
 * # MainCtrl
 * Controller of the ejeTecnicoApp
 */
angular.module('ejeTecnicoApp')
  .service('ExampleService', function ($http, $q) {
  		var deferred = $q.defer();
  		var vm = this;

  		this.loadData = loadData;

  		function loadData() {
            return $http.get('txtUbigeo.txt')
                .then(function(data) {
                    deferred.resolve(data);
                    return deferred.promise;
                }, function() {
                    deferred.reject();
                    return deferred.promise;
                });  			
      }
  		
  });
