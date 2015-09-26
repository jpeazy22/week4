angular.module('quotes', []);

angular.module('quotes').controller('mainController', ['$scope', function($scope){
	$scope.quote = ''
	$scope.author = ''
	$scope.rating = ''
	$scope.cl = function(index){
		console.log(index)
	}
	var quotesMain = [
	{
		quote: "It's a beautiful day in the Neighborhood",
		author: 'Mr. Rogers',
		rating: 5,
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
	var sortCollection = function(array, property, order){
		order = order || "descending"
		array.sort(function(a,b){
			if (order === "ascending"){
				if(a[property].toLowerCase() < b[property].toLowerCase()) return -1;
	    		if(a[property].toLowerCase() > b[property].toLowerCase()) return 1;
    			return 0;
    		}
    		if (order === "descending"){
				if(a[property] > b[property]) return -1;
	    		if(a[property] < b[property]) return 1;
    			return 0;
    		}
		})
		return array
	}

	$scope.quotes = quotesMain

	sortCollection($scope.quotes, "rating", "descending")

	$scope.addQuote = function(){
		var myObj = {}
		myObj.quote = $scope.quote
		myObj.author = $scope.author
		myObj.rating = $scope.rating
		$scope.quotes.push(myObj)
		console.log($scope.quotes)
		$scope.quote = ''		
		$scope.author = ''
		$scope.rating = ''
		stars()
		sortCollection($scope.quotes, "rating", "descending")
	}

	$scope.sortByAuthor = function(event){
		console.log($scope.quotes)

		sortCollection($scope.quotes, "author", "ascending")
	}

	$scope.removeQuote = function(quote){
		$scope.quotes.splice($scope.quotes.indexOf(quote), 1);

	}

	$scope.toggleForm = function($event){
		$scope.showForm = !$scope.showForm;		
		$scope.hideForm = !$scope.hideForm			
	}

	$scope.getRandomQuote = function () {
	   $scope.randomQuote = $scope.quotes[Math.floor(Math.random() * $scope.quotes.length)];
	}

	function stars(){
		for (var i = 0; i < $scope.quotes.length; i++) {
		// console.log($scope.quotes[i])
		$scope.quotes[i].stars = []
			for (var j = 0; j < $scope.quotes[i].rating; j++){
				$scope.quotes[i].stars.push("★")
				// console.log($scope.quotes[i].stars)
			}
		// $scope.quotes[i].stars.join(' ')
		// console.log($scope.quotes[i].stars)

	};
	}
	stars()


	
	// $scope.starArray = ['♘','♘ ','♘  ','♘   ','♘    ']
	// Quote.prototype.setRating = function(){
	// 	if(this.stars[2].base == false){
	// 		for(var i = 1; i >= 0; i--){
	// 			if(this.star[i].base == true){
	// 				this.rating = i + 1;
	// 				break;
	// 			}
	// 		}
	// 	}
	// }
	// return Quote;

// 	$scope.sortAuthor = function(){
// quote in quotes | filter:query | orderBy: 'author'

// 	}		

}]);











