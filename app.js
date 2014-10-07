var app = angular.module('slackerNews', ['ui.router'])
.factory('posts', [function(){
	var o = {
		posts: []
	};
	return o;
}])
.controller('mainCtrl', function($scope, posts, dataService){
		
	var getPosts = function(){
	$scope.posts = dataService.getPosts();
	}
	getPosts();

	$scope.addPost = function(){
		dataService.addPost($scope.post)
		$scope.post = '';
	};
	$scope.incrementUpvotes = function(post){
		post.upvotes += 1;
	};
	// var myFirebaseRef = new Firebase('https://slackerNews.firebaseio.com/');
	// myFirebaseRef.set({
	// })


});

//.toISO()