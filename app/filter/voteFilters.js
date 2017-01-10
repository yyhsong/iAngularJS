//格式化球员位置
angular.module("voteApp").filter("posFilter", function() {
	return function(val) {
		var pos = "Unknown";
		switch (val) {
			case "PG":
				pos = "控球后卫(PG)";
				break;
			case "SG":
				pos = "得分后卫(SG)";
				break;
			case "SF":
				pos = "小前锋(SF)";
				break;
			case "PF":
				pos = "大前锋(PF)";
				break;
			case "C":
				pos = "中锋(C)";
				break;
			default:
				break;
		}
		return pos;
	}
});
