'use strict';

/**
 * @ngdoc function
 * @name ejeTecnicoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ejeTecnicoApp
 */
angular.module('ejeTecnicoApp')
  .controller('MainCtrl',['ExampleService', function (ExampleService) {
  		var vm = this;

  		vm.load = load;
  		vm.getProvincias = getProvincias;
  		vm.getDistritos = getDistritos;
  		vm.selectedDpto = true;
  		vm.selectedProvincia = true;

  		load();

  		function load() {
			ExampleService.get_departamento_data()
			    .then(function(response) {
			    	vm.departamento = response.departamento;
			    	vm.provincia = response.provincia;
			    	vm.distrito = response.distrito;
                },function(response) {
                	vm.error = response.error;
                });				
        }

        function getProvincias(departamentoId){
        	vm.selectedDpto = false;
        	vm.filter_provincia = departamentoId;
        }

        function getDistritos(provinciaId){
			vm.selectedProvincia = false;        	
        	vm.filter_distrito = provinciaId;
        }        
  }]);
