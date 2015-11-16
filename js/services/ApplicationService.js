/**
 * Created by Sam on 11/15/2015.
 */
var applicationService = angular.module("applicationService",[]);

applicationService
    .factory('posts', [function(){
        var o = {
            posts: []
        };
        return o;
    }]);