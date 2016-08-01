'use strict';

/**
 * @ngdoc service
 * @name workspaceApp.searchBox
 * @description
 * # searchBox
 * Factory in the workspaceApp.
//  */
// angular.module('workspaceApp')
//   .factory('searchbox', function ($resource) {
//     // Service logic
//     // ...

//      // Public API here
//     return $resource('http://api.themoviedb.org/3/search/movie?api_key=0ee729f7a5162307774f1f09911d0b59&query=:movieName', {}, {
//       query: {
//         method:'GET',
//         params:{
//           movieName: 'Seattle'
//         },
//         isArray:false
//       }
//     });
//   });
//https://api.themoviedb.org/3/movie/33?api_key=0ee729f7a5162307774f1f09911d0b59
angular.module('yourApp')
  .factory('searchbox', function ($resource) {
    // Service logic
    // ...

    // Public API here
    return $resource('http://api.openweathermap.org/data/2.5/weather?q=:location&units=imperial&72c36323cb40ea6bbfa8cd2b63040617', {}, {
      query: {
        method:'GET',
        params:{
          location: 'Seattle,us'
        },
        isArray:false
      }
    });
  });
//72c36323cb40ea6bbfa8cd2b63040617