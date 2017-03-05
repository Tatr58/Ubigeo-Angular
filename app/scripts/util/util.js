'use strict';

/**
 * @ngdoc function
 * @name ejeTecnicoApp.util:UtilService
 * @description
 * # UtilService
 * UtilService of the ejeTecnicoApp
 */
angular.module('ejeTecnicoApp')
  .service('UtilService', function () {
    var vm = this;
    this.formatUbigeo = formatUbigeo;

    function formatUbigeo(response) {
      var ubigeo_json = {};
      var arr1 = [];
      var arr2 = [];
      var departamento = [];
      var provincia = [];
      var distrito = [];

      arr1 = response.data.split("\n");
      for (var i = 0; i < arr1.length-1; i++) {
        arr2.push(arr1[i].split('/'));
      }

      if (angular.isDefined(arr2)) {
        for (var j = arr2.length - 1; j >= 0; j--) {
          var distrito_arr = arr2[j][2].split(' ');
          var provincia_arr = arr2[j][1].split(' ');
          var departamento_arr = arr2[j][0].split(' ');

          if (arr2[j][2].toString().trim() !== "") {                  
            var nombre_distrito = '';

            if (distrito_arr[3] !== undefined) {
              nombre_distrito = distrito_arr[2] + ' ' + distrito_arr[3];
            } else {
              nombre_distrito = distrito_arr[2];
            }

            var distrito_elem = {
              'codigo': distrito_arr[1],
              'nombre': nombre_distrito,
              'codigo_padre': provincia_arr[1],
              'descripcion_padre': provincia_arr[2]
            }

            distrito.push(distrito_elem);
          } 

          if (arr2[j][1].toString().trim() !== "" && arr2[j][2].toString().trim() === "") {
            var provincia_elem = {
              'codigo': provincia_arr[1],
              'nombre': provincia_arr[2],
              'codigo_padre': departamento_arr[0],
              'descripcion_padre': departamento_arr[1]
            }                 
            provincia.push(provincia_elem);
          } 

          if (arr2[j][0].toString().trim() !== "" && arr2[j][1].toString().trim() === "") {
            var departamento_elem = {
              'codigo': departamento_arr[0],
              'nombre': departamento_arr[1],
              'codigo_padre': "",
              'descripcion_padre': ""
            }                 
            departamento.push(departamento_elem);
          }           
        }
      }

      ubigeo_json = {
        'departamento': departamento,
        'provincia': provincia,
        'distrito': distrito       
      }

      return ubigeo_json;
    }
  });