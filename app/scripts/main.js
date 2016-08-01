
// myApp? wats4000FinalProject workspaceApp
angular.module('workspaceApp')
  .controller('MainCtrl', function ($scope, searchbox) {
    $scope.searchbox = searchbox.query();
  
    $scope.refreshSearchBox = function(){
        $scope.searchbox = searchbox.query({
            movieName: $scope.movieName
        });
    };
  });

