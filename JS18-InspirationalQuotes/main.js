angular.module("myApp", []);

angular.module("myApp").controller('mainController', ['$scope', function($scope){
	$scope.author = ''
	$scope.quote = ''
	$scope.rating = 0

	$scope.quotes = [
	{
		author: "joanie",
		quote: "when life hands you lemons...",
		rating: 3
	},
	{
		author: "hannaMontanna",
		quote: "look at me, look at me!",
		rating: 3
	},
	{
		author: "george",
		quote: "george, george, george of the jungle",
		rating: 3
	},
	]
	$scope.removeQuote = function(index){
		console.log(index)
		$scope.quotes.splice(index, 1)
	}
	$scope.submitQuote = function(){
		// alert('hansel is vain')
		// var myObj = {
		// 	author: $scope.author,
		// 	quote: $scope.quote,
		// 	rating: $scope.rating,
		// }
		var myObj = {}
		myObj.author = $scope.author
		myObj.quote = $scope.quote
		$scope.quotes.push(	myObj)
		$scope.author = ''
		$scope.quote = ''	
	}
	
	
}])
// $scope.showForm = false;
// 	$scope.hideForm = true;
// 	$scope.quotes = [];




// 	$scope.display = function(){
// 		$scope.showInfo = true;
// 	};


// 	$scope.toggleForm = function($event){
// 		$scope.showForm = !$scope.showForm;
// 		$scope.hideForm = !$scope.hideForm
// 	}

// 	$scope.submitQuote = function($event){
// 		$scope.quotes.push({text:$scope.quote,author:$scope.author})  
// 		//this pushes to the quotes array. 
// 		//Ng-repeat accesses the $scope.quotes array.
// 		console.log($scope.quotes)

// 	}