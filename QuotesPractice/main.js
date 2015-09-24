angular.module('quotes', []);

angular.module('quotes').controller('mainController', ['$scope', function($scope){
	$scope.quote = ''
	$scope.author = ''
	$scope.rating = ''

	$scope.quotes = [
	{
		quote: "It's a beautiful day in the Neighborhood",
		author: 'Mr. Rogers',
		rating: 2,
	},
	{
		quote: "It's a good day to die hard.",
		author: 'Bruce Willis',
		rating: 4,
	},
	{
		quote: "Mike, guess what day it is!?",
		author: 'The Camel',
		rating: 5,
	},
	{
		quote: "The early bird gets the worm",
		author: 'Early Bird',
		rating: 1,
	},
	{
		quote: "He loves, he loves me not",
		author: 'Dying Flower',
		rating: 2,
	},

	]

	$scope.addQuote = function(){
		var myObj = {}
		myObj.quote = $scope.quote
		myObj.author = $scope.author
		myObj.rating = $scope.rating
		$scope.quotes.push(myObj)
		$scope.quote = ''		
		$scope.author = ''
		$scope.rating = ''
	}

	$scope.removeQuote = function(index){
		$scope.quotes.splice(index, 1);
	}

	$scope.toggleForm = function($event){
		$scope.showForm = !$scope.showForm;		
		$scope.hideForm = !$scope.hideForm			
	}

	$scope.randomQuote = function () {
	   $scope.randomQuote = $scope.quotes[Math.floor(Math.random() * $scope.quotes.length)];
}



// 	$scope.sortAuthor = function(){
// quote in quotes | filter:query | orderBy: 'author'

// 	}		

}]);











