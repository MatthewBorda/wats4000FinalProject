
// myApp? wats4000FinalProject workspaceApp
angular.module('workspaceApp')
  .controller('MainCtrl', function ($scope, current) {
    $scope.current = current.query();

    $scope.refreshCurrent = function(){
        $scope.current = current.query({
            location: $scope.location
        });
    };
  });
//   .controller('MainCtrl', function ($scope, searchbox) {
//     $scope.searchbox = searchbox.query();
  
//     $scope.refreshSearchBox = function(){
//         $scope.searchbox = searchbox.query({
//             location: $scope.location
//         });
//     };
//   });

