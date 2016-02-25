app.factory('crestService', function ($http, $location, $window) {
    var rootUrl = "https://api-sisi.testeveonline.com/";
    var oauthUrl = "https://sisilogin.testeveonline.com/oauth/authorize/?response_type=code&redirect_uri=" + encodeURIComponent('http://bershadskiy.github.io/#/auth') + "&client_id=bef0bb70a1d0430981755636671fcb93&scope=publicData,characterContactsRead,characterContactsWrite&state=getcode";
    var sOauthUrl = "https://sisilogin.testeveonline.com/oauth/token/?response_type=code&redirect_uri=" + encodeURIComponent('http://bershadskiy.github.io/#/auth') + "&client_id=bef0bb70a1d0430981755636671fcb93&scope=publicData,characterContactsRead,characterContactsWrite&state=getcode";

    return {
        getData: function (tUrl) {
            // console.log(tUrl);
            if (null === tUrl)
                tUrl = rootUrl;

            return $http.get(tUrl, {
                cache: true
            });
        },
        redirectSSO: function () {
            $window.location = oauthUrl;
        }
    }
});
