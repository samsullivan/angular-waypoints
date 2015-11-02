(function() {
    'use strict';

    var app = angular.module('angular-waypoints', []);

    app.directive('waypoint', function() {
        return {
            restrict: 'A',
            link: function(scope, elem, attrs) {
                new Waypoint(scope.$eval(attrs.waypoint)(scope, elem, attrs));
            }
        };
    });

})();
