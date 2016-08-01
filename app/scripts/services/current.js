// 'use strict';

// /**
//  * @ngdoc service
//  * @name workspaceApp.current
//  * @description
//  * # current
//  * Factory in the workspaceApp.
//  */
// angular.module('workspaceApp')
//   .factory('current', function ($resource) {
//     // Service logic
//     // ...

//     // Public API here
//     return $resource('http://api.openweathermap.org/data/2.5/weather?q=:location&units=imperial&APPID=72c36323cb40ea6bbfa8cd2b63040617', {}, {
//       query: {
//         method:'GET',
//         params:{
//           location: 'Seattle,us'
//         },
//         isArray:false
//       }
//     });
//   });
'use strict';

/**
 * @ngdoc function
 * @name yourApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the yourApp
 */
angular.module('workspaceApp')
  .controller('MainCtrl', function ($scope, current) {
    $scope.current = current.query();

    $scope.refreshCurrent = function(){
        $scope.current = current.query({
            location: $scope.location
        });
    };
  });