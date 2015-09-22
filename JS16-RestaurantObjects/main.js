var FoodItem = function(name, calories, vegan, glutenFree, citrusfree){
	this.name = name;
	this.calories = calories;
	this.vegan = vegan;
	this.glutenFree = glutenFree;
	this.citrusfree = citrusfree;
	FoodItem.prototype.stringify = function(){
		console.log('Item: ' + this.name + ' Calories: ' + this.calories + ' Vegan: ' + this.vegan + ' Gluten Free: ' + this.glutenFree + ' Citrus Free: ' + this.citrusfree)
	}

}

var noodles = new FoodItem('noodles', 678, true, true, false);
	noodles.stringify();
var chicken = new FoodItem('chicken', 982, false, false, true);
	chicken.stringify();
var bread = new FoodItem('bread', 788, false, false, true);
	bread.stringify();
var lettuce = new FoodItem('lettuce', true, true, true);
var tequila = new FoodItem('tequila', 100, false, false, false);
var sugar = new FoodItem('cane sugar', 75, true, true, true);
var water = new FoodItem('h20', 1, true, true, true)


var Drink = function(name, description, price, ingredients){
	this.name = name;
	this.description = description;
	this.price = price;
	this.ingredients = ingredients;
	
}	


var Plate = function(name, description, price, ingredients){
	this.name = name;
	this.description = description;
	this.price = price;
	this.ingredients = ingredients;
}

var Order = function(plates){
	this.plates = plates;
}

var Menu = function(plates){
	this.plates = plates;
}

var Restaurant = function(name, description, menu){
	this.name = name;
	this.description = description;
	this.menu = menu;
}

var Customer = function(dietaryPreference){
	this.dietaryPreference = dietaryPreference;
}