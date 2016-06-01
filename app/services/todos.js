'use strict';

angular.module('angularApp')
  .service('todosService', ['$http', '$q', function ($http, $q) {

    return ({
      getTodos: getTodos,
      getTodo: getTodo,
      addTodo: addTodo,
      changeTodo: changeTodo,
      deleteTodo: deleteTodo
    });

    function getTodos() {
      // http://www.example.com/api/todos/
      var request = $http.get('../dummyData/initialToDos.json');
      return request.then(handleSuccess, handleError);
    }

    function getTodo(id) {
      var request = $http.get('todos/' + id);
      return request.then(handleSuccess, handleError);
    }

    function addTodo(todo) {
      // http://www.example.com/api/todos/
      var request = $http.post('todos', todo);
      return request.then(handleSuccess, handleError);
    }

    function changeTodo(todo) {
      // http://www.example.com/api/todos/1
      var request = $http.put('todos/' + todo.id, todo);
      return request.then(handleSuccess, handleError);
    }

    function deleteTodo(todo) {
      //http://www.example.com/api/todos/1
      var request = $http.delete('todos/' + todo.id);
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

        return ( $q.reject("An error occurred. Status " + response.status + ": " + response.data) );
      }
      // Otherwise, use expected error message.
      return ( $q.reject(response.data.message) );
    }

    function handleSuccess(response) {
      return (response.data);
    }

  }]);
