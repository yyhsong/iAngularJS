//List Controller
function playerListCtrl($scope, $http) {
	$http.get("data/players.json").success(function(data) {
		$scope.players = data;
	});
	$scope.orderProp = "votes";
}

//Detail Controller
function playerDetailCtrl($scope, $http, $routeParams) {
	$http.get("data/players.json").success(function(data) {
		var i = parseInt($routeParams.playerId)-1;
		$scope.player = data[i];
		if($routeParams.playerName) {
			console.log("Player Name: " + $routeParams.playerName);
		}
	});
	
	$scope.getThumb = function(playerThumb) {
		console.log("Player Thumb: " + playerThumb);
	};
}