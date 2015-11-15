/**
 * Created by Sam on 11/15/2015.
 */
var applicationController=angular.module('applicationController',[]);

applicationController.controller('MainCtrl', [
    '$scope','posts',
    function($scope,posts){
        $scope.posts = posts.posts;

        $scope.incrementUpvotes = function(post) {
            post.upvotes += 1;
        };

        $scope.addPost = function(){
            if(!$scope.title || $scope.title === '' || $scope.bodypost === '') { return; }

            $scope.posts.push({
                bodypost:$scope.bodypost,
                title: $scope.title,
                link: $scope.link,
                upvotes: 0,
                comments: [
                    {author: 'Joe', body: 'Cool post!', upvotes: 0},
                    {author: 'Bob', body: 'Great idea but everything is wrong!', upvotes: 0}
                ]
            });

            $scope.title = '';
            $scope.link = '';
            $scope.bodypost = '';
        };


    }]);

applicationController.controller('PostsCtrl', [
    '$scope',
    '$routeParams',
    'posts',
    function($scope, $routeParams, posts){
        $scope.post = posts.posts[$routeParams.id];
        $scope.addComment = function(){
            if($scope.body === '') { return; }
            $scope.post.comments.push({
                body: $scope.body,
                author: 'user',
                upvotes: 0
            });
            $scope.body = '';
        };
    }]);