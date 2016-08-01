
// myApp? wats4000FinalProject workspaceApp
angular.module('wats4000FinalProject')
  .controller('MainCtrl', function ($scope, searchbox) {
    $scope.current = searchbox.query();
  
    $scope.refreshSearchBox = function(){
        $scope.searchbox = searchbox.query({
            movieName: $scope.movieName
        });
    };
  });