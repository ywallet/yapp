(function() {
    "use strict";

    angular
        .module("yapp.authentication")
        .controller("SignIn", SignIn);

    SignIn.$inject = ["$scope", "$auth", "StateRouter", "DSUser", "$http"];

    function SignIn($scope, $auth, StateRouter, DSUser, $http) {
        $scope.signinData = {
            email: "",
            password: ""
        };

        $scope.doSignIn = doSignIn;

        ////////////////////

        function doSignIn() {
            var data = {
                email: $scope.signinData.email,
                password: $scope.signinData.password
            };
            $scope.signinData.password = "";
            $auth.submitLogin(data)
                .then(onSignInSuccess)
                .catch(onSignInError);
        }


        function onSignInSuccess(resp) {
            if (resp.manager_id != null) {
                resp.role = "parent";
                resp.children = [];
            } else {
                resp.role = "child";
            }
            DSUser.putUser(resp);
            $http.get("http://ywallet.co/managers")
                .success(function (data) {
                    console.log(JSON.stringify(data));
                    StateRouter.goAndForget("yapp.dashboard");
                })
                .error(function (data) {
                    console.error(data.errors);
                });
        }

        function onSignInError(resp) {
            if (resp && resp.errors && false) {
                console.error("error authenticating", resp.errors);
            } else {
                // TODO development only
                onSignInSuccess({
                    id:         1,
                    provider:   "email",
                    uid:        "teste@teste.com",
                    name:       "teste",
                    nickname:   null,
                    image:      null,
                    email:      "teste@teste.com",
                    manager_id: 1,
                    child_id:   null,
                    address:    null,
                    phone:      null,
                    birthday:   null
                });
            }
        }
    }
})();