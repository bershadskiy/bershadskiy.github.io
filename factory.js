app.factory('crestService', function ($http, $location) {
    var rootUrl = "http://public-crest-sisi.testeveonline.com/";
    var oauthUrl = "https://sisilogin.testeveonline.com/oauth/authorize/?response_type=code&redirect_uri=http://bershadskiy.github.io/#/auth&client_id=bef0bb70a1d0430981755636671fcb93&scope=publicData&state=getcode";

    return {
        getData: function (tUrl) {
            // console.log(tUrl);
            if (null === tUrl)
                tUrl = rootUrl;

            return $http.get(tUrl, {
                cache: true
            });
        },
        redirectSSO: function(){
            $window.location = oauthUrl;
        }
    }
});