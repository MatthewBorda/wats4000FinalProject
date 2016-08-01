
// myApp? wats
angular.module('workspaceApp')
  .controller('MainCtrl', function ($scope, searchbox) {
    $scope.current = searchbox.query();
  
    $scope.refreshSearchBox = function(){
        $scope.searchbox = searchbox.query({
            movieName: $scope.movieName
        });
    };
  });