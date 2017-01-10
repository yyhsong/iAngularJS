//自定义Service
angular.module("voteApp").service("voteSer", ["$q", "$http", function($q, $http) {
	this.getPlayerNames = function() {
		var deferred = $q.defer(); 
		var playerNames = [];
		$http.get("data/players.json").success(function(data) {
			deferred.resolve(data); //设置同步获取数据
			angular.forEach(data, function(v, k) {
				playerNames.push(v.name.toLowerCase());
			});
		});
		return playerNames;
	};
	
	this.isExisted = function(val) {
		var playerNames = this.getPlayerNames();
		console.log(val);
		console.log(playerNames.length);
		console.log(playerNames.indexOf(val.toLowerCase()) === -1 ? false : true);
		return playerNames.indexOf(val.toLowerCase()) === -1 ? false : true;
	};
}]);