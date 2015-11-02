(function() {
    'use strict';

    var app = angular.module('angular-waypoints', []);

    app.directive('waypoint', function() {
        return {
            restrict: 'A',
            link: function(scope, elem, attrs) {
                new Waypoint(scope.$eval(attrs.waypoint)(elem[0]));

                scope.$watch(function() {
                    return angular.element(elem).html();
                }, function() {
                    Waypoint.refreshAll();
                });
            }
        };
    });

})();
