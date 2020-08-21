'use strict';

/**
 * @ngdoc function
 * @name wisbooFrontApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the wisbooFrontApp
 */
angular.module('wisbooFrontApp')
  .controller('MainCtrl', function ($scope, webService) {
    var vm = this;
    var operations = {
      loading: false,
      hasError: false,
      errorMessage: null,
      errorType: "error",
    }
    vm.url = "";
    vm.operations = operations;
    vm.createUrl = createUrl;
    vm.deleteUrl = deleteUrl;
    vm.editUrl = editUrl;

    function init() {
      getUrl();
    }
    init();

    function getUrl() {
      webService.getUrl()
        .then(function (response) {
          vm.urls = response.data;
          vm.operations.loading = true;
        }), function (error) {
          alert('Error buscando URL', error)
        };
    }

    function createUrl() {
      let params = {
        "short_url": vm.url,
        "original_url": vm.url,
        "view_count": 0
      }
      webService.createUrl(params).then(function (response) {
        alert("Insert exitoso");
        getUrl();
      }).catch(function (error) {
        console.log("ocurrió un error", error);
      });
    }

    
    function deleteUrl(id) {
    
      webService.deleteUrl(id).then(function (response) {
        alert("Eliminado con éxito");
        getUrl();
      }).catch(function (error) {
        console.log("ocurrió un error", error);
      });
    }

    function editUrl(url){
      url.view_count = + 1;
      webService.editUrl(url).then(function (response) {
        alert("Actualizado con éxito");
        getUrl();
      }).catch(function (error) {
        console.log("ocurrió un error", error);
      });
    }
    


  });
