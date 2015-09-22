angular.module("myApp", []);

angular.module("myApp").controller('mainController', ['$scope', function($scope){

	$scope.showForm = false;
	$scope.hideForm = true;
	$scope.quotes = [];




	$scope.display = function(){
		$scope.showInfo = true;
	};


	$scope.toggleForm = function($event){
		$scope.showForm = !$scope.showForm;
		$scope.hideForm = !$scope.hideForm
	}

	$scope.submitQuote = function($event){
		$scope.quotes.push({text:$scope.quote,author:$scope.author})  
		//this pushes to the quotes array. 
		//Ng-repeat accesses the $scope.quotes array.
		console.log($scope.quotes)

	}
}])