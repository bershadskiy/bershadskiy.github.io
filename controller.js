app.controller('publicListController', function ($scope, $log, crestService) {
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

app.controller('regionsController', function ($scope, $http) {

    $http.get("/data/regions.json")
        .success(function (data) {
            $scope.data = data.items;
        });

});

app.controller('navController', function ($scope,$log,crestService) {

    $scope.goAuth = function () {
        // $log.debug(11);
        // $log.debug();
        crestService.redirectSSO();
    };
});

app.controller('authController', function ($scope, $http, $routeParams, $log) {

    var code = $routeParams.code;
    $log.log(code);

    localStorage.setItem("code", code);

});
