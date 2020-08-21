angular.module('wisbooFrontApp')
  .service('webService',['$http','$resource', function($http, $resource) {
    var path = "http://localhost:4000/";
    return {
        getUrl : getUrl,
        createUrl : createUrl,
        deleteUrl : deleteUrl,
        editUrl: editUrl
    }

    function getUrl() {
        return $http.get(path + "/urls");
    }

    function createUrl(params){
        return $http.post(path + "/urls", params);
    }

    function deleteUrl(params){
        return $http.delete(path + "/urls/" + params );
    }

    function editUrl(params){
        //Quedé por acá
        return $http.put(path + "/urls" , params );
    }
 

  }]);
