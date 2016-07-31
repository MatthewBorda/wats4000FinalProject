'use strict';

/**
 * @ngdoc service
 * @name workspaceApp.searchBox
 * @description
 * # searchBox
 * Factory in the workspaceApp.
 */
angular.module('workspaceApp')
  .factory('searchBox', function ($resource) {
    // Service logic
    // ...

  

    // Public API here
    return $resource('http://api.themoviedb.org/3/search/movie?api_key=0ee729f7a5162307774f1f09911d0b59&query=:query', {}, {
      query: {
        method:'GET',
        params:{
          query: 'Seattle'
        },
        isArray:false
      }
    });
  });
//https://api.themoviedb.org/3/movie/33?api_key=0ee729f7a5162307774f1f09911d0b59