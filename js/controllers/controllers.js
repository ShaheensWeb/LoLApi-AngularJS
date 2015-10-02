(function(){ 	
	var leaderboardApp = angular.module('leaderboardApp', [])
	.controller('challengerController', function($scope, $http) {
  	var LoLAPIkey = '15b1f631-0414-4515-a175-927e7f5807b8'; //see developer.riotgames.com for ref

  	//lets get the ranked solo 5x5 ladder board
  	$http.get('https://na.api.pvp.net/api/lol/na/v2.5/league/challenger?type=RANKED_SOLO_5x5&api_key='+LoLAPIkey).success(function(data) {
    	$scope.PlayersRanking = data.entries;
  	});

  	//lets see if NA is alive even..
	$http.get('http://status.leagueoflegends.com/shards/na').success(function(data){
  		$scope.ServerStatus = data.services; 
  	});
	    
  	// Sort players from the heightest leaguePoints to the lowest.
	$scope.pointPrioritization = '-leaguePoints';
	});
  	
})();