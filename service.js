var app = angular.module('slackerNews');

app.service("dataService", function(){
	var posts = [
		{title: "post 1", upvotes: 5,},{
	     title: "post 2", upvotes: 3
		}
	];

	this.getPosts = function(){
		return posts;
	};

	this.addPost = function(post){
		if(post){
			posts.push({title: post.title, url: post.url, upvotes: 0})
		}
	};
    // var bingNews = [];
    // this.getNews = function(news){
    // 	return $http({
    // 		method: "JSONP",
    // 		url:
    // 	})
});

