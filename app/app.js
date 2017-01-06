//定义主模块并注册依赖
angular.module("voteApp", ["ngRoute"]);

//路由配置
angular.module("voteApp").config(["$routeProvider", function($routeProvider) {
	$routeProvider.when("/player/list", {
		templateUrl: "tmpl/player/list.html",
		controller: playerListCtrl
	}).when("/player/:playerId", {
		templateUrl: "tmpl/player/view.html",
		controller: playerViewCtrl
	}).when("/player/:playerId/:playerName", {
		templateUrl: "tmpl/player/view.html",
		controller: playerViewCtrl
	}).otherwise({
		redirectTo: "/player/list"
	});
}]);