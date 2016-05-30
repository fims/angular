'use strict';

angular.module('angularApp')
  .service('todosService', ['$http', '$q', function ($http, $q) {

    return ({
      getTodos: getTodos
    });

    function getTodos() {
      var request = $http.get('../dummyData/initialToDos.json');
      return request.then(handleSuccess, handleError);
    }

    function handleError(response) {
      // The API response from the server should be returned in a
      // nomralized format. However, if the request was not handled by the
      // server (or what not handles properly - ex. server error), then we
      // may have to normalize it on our end, as best we can.
      if (
        !angular.isObject(response.data) || !response.data.message
      ) {
        return ( $q.reject("An unknown error occurred.") );
      }
      // Otherwise, use expected error message.
      return ( $q.reject(response.data.message) );
    }

    function handleSuccess(response) {
      return (response.data);
    }

  }]);
