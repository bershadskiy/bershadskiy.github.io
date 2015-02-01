/**
 * CrestViewer Module
 *
 * Description
 */
'use strict';

var app = angular.module('crestviewer', ['ngRoute']);

app.value('geminateRegionID', 10000029);
app.value('ipsqbConstelationID', 20000358);
app.value('bwfzzSolarID', 30002440);

app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when("/", {
            controller: 'publicListController',
            templateUrl: 'templates/link.html'
        })
        .when("/regions", {
            controller: 'regionsController',
            templateUrl: 'templates/regions.html'
        })
        .when("/auth", {
            controller: 'authController',
            template: ''
        }).when("/about", {
            template: 'All EVE graphics and data used are property of <a href="http://www.ccpgames.com/">CCP.</a>'
        })
        .otherwise({
            redirectTo: "/"
        });
}]);