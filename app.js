/**
 * CrestViewer Module
 *
 * Description
 */
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
        })
        .otherwise({
            redirectTo: "/"
        });
}]);

app.controller('publicListController', function ($scope, crestService) {
    // console.log($route.current.params.url);

    crestService.getData(null)
        .success(function (data) {
            $scope.links = data;
        });

    $scope.loadData = function () {
        var rhref = this.link.href;

        if (undefined === rhref) {
            console.log(this.link);
            return;
        }
        else {
            crestService.getData(rhref)
                .success(function (data) {
                    $scope.links = data;
                });
        }
    };

});

app.controller('regionsController', function ($scope,$http) {

    $http.get("/data/regions.json").success(function(data){
        $scope.data = data.items;
    });

});

app.controller('authController', function ($scope,$http,$routeParams,$log) {

    var code = $routeParams.code;
    $log.log(code);

    localStorage.setItem("code",code);

});

app.factory('crestService', function ($http) {
    var rootUrl = "https://public-crest-sisi.testeveonline.com/";

    return {
        getData: function (tUrl) {
            // console.log(tUrl);
            if (null === tUrl)
                tUrl = rootUrl;

            return $http.get(tUrl, {
                cache: true
            });
        }
    }
});
