var app = angular.module('flapperNews',[
    'ngRoute',
    'applicationController',
    'applicationService'
])
    .config(["$routeProvider",
        function($routeProvider){
            $routeProvider
                .when("/home",{
                templateUrl:"partials/home.html",
                controller:"MainCtrl"
            }).when("/posts/:id",{
                    templateUrl:"partials/posts.html",
                    controller:"PostsCtrl"
                }).
                otherwise({
                    redirectTo: '/home'
                });
        }
    ]);
