var app = angular.module("myPortfolio",["ngRoute"]);

app.config(function($routeProvider){
	$routeProvider
		.when('/', { templateUrl: "templates/landing.html"})
		.when('/about', { templateUrl: "templates/about.html"})
		.when('/work', {templateUrl: "templates/work.html"})
		.when('/contact', {templateUrl: "templates/contact.html"});
});