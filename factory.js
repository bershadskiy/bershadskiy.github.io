app.factory('crestService', function ($http, $location, $window) {
    var rootUrl = "https://api-sisi.testeveonline.com/";
    var oauthUrl = "https://sisilogin.testeveonline.com/oauth/authorize/?response_type=code&redirect_uri=" + encodeURIComponent('http://bershadskiy.github.io/#/auth') + "&client_id=b1712dab4d4441faa3d92f0bbe53a13a&scope=publicData,characterContactsRead,characterContactsWrite&state=getcode";
    var sOauthUrl = "https://sisilogin.testeveonline.com/oauth/token/?response_type=code&redirect_uri=" + encodeURIComponent('http://bershadskiy.github.io/#/auth') + "&client_id=b1712dab4d4441faa3d92f0bbe53a13a&scope=publicData,characterContactsRead,characterContactsWrite&state=getcode";

    return {
        getData: function (tUrl) {
            // console.log(tUrl);
            if (null === tUrl)
                tUrl = rootUrl;

            return $http.get(tUrl, {
                cache: false
            });
        },
        redirectSSO: function () {
            $window.location = oauthUrl;
        }
    }
});
