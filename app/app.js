//定义主模块并注入依赖
angular.module("voteApp", ["ngRoute"]);

//路由配置
angular.module("voteApp").config(["$routeProvider", function($routeProvider) {
	$routeProvider.when("/player/list", {
		templateUrl: "tmpl/player/list.html",
		controller: playerListCtrl
	}).when("/player/view/:playerId", {
		templateUrl: "tmpl/player/view.html",
		controller: playerViewCtrl
	}).when("/player/view/:playerId/:playerName", {
		templateUrl: "tmpl/player/view.html",
		controller: playerViewCtrl
	}).when("/player/add", {
		templateUrl: "tmpl/player/add.html",
		controller: playerAddCtrl
	}).when("/player/edit/:playerId", {
		templateUrl: "tmpl/player/edit.html",
		controller: playerEditCtrl
	}).otherwise({
		redirectTo: "/player/list"
	});
}]);