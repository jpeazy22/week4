var FoodItem = function(name, calories, vegan, glutenFree, citrusfree){
	this.name = name;
	this.calories = calories;
	this.vegan = vegan;
	this.glutenFree = glutenFree;
	this.citrusfree = citrusfree;

FoodItem.prototype.stringify = function(){
		console.log('Item: ' + this.name + '\nCalories: ' + this.calories + '\nVegan: ' + this.vegan + ' \nGluten Free: ' + this.glutenFree + ' \nCitrus Free: ' + this.citrusfree)
	}
}

// var marg = new Drink()
	
// beans.stringify();
// avacado.stringify();
// chicken.stringify();
// onion.stringify();
// lettuce.stringify();
// tequila.stringify();
// rice.stringify();

//=========================== PART 2 ==========================//

var Drink = function(name, description, price, ingredients){
	this.name = name;
	this.description = description;
	this.price = price;
	this.ingredients = ingredients;
}


Drink.prototype.stringify = function(){
	var ingredientString = ''
	for(var i = 0; i < this.ingredients.length; i++){
		ingredientString += this.ingredients[i].name + ', '
	}
	//console.log('Drink: ' + this.name + '\n' + this.description + '\nPrice: ' + this.price + ' \nIngredients: ' + ingredientString) 
	
}

var Plate = function(name, description, price, ingredients){
	Drink.call(this, name, description, price, ingredients)
	console.log(this)
}

	this.isVegan = function () {
		var confirm = 0
		this.ingredients.forEach(function(ingredients){
			if(!ingredient.vegan){
				confirm++
			}
		})
		if(confirm) return false
			else return true
	}

	this.isGlutenFree = function () {
			var confirm = 0
			this.ingredients.forEach(function(ingredients){
				if(!ingredient.vegan){
					confirm++
				}
			})
			if(confirm) return false
				else return true
	}
	this.isCitrusFree = function () {
		var confirm = 0
		this.ingredients.forEach(function(ingredients){
			if(!ingredient.vegan){
				confirm++
			}
		})
		console.log(confirm)
		if(confirm) return false
			else return true
	}

Plate.prototype.stringify = function(){
	var ingredientString = ''
	for(var i = 0; i < this.ingredients.length; i++){
		ingredientString += this.ingredients[i].name + ', '
	}
	console.log('Entree: ' + this.name + '\n' + this.description + '\nPrice: ' + this.price + ' \nIngredients: ' + ingredientString) 

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

var avacado = new FoodItem('Avacado', 678, true, true, false);
var chicken = new FoodItem('Chicken', 982, false, false, true);
var onion = new FoodItem('Onion', 788, false, false, true);
var lettuce = new FoodItem('Lettuce', 1, true, true, true);
var tequila = new FoodItem('Tequila', 100, false, false, false);
var tripleSec = new FoodItem('TripleSec', 50, true, false, false);
var lime = new FoodItem('Lime', 2, true, true, false);
var rice = new FoodItem('Rice', 75, true, true, true);
var beans = new FoodItem('Beans', 1, true, true, true)


var burrito = new Plate('Chicken Burrito', "'Super Satisfying'", 9.25, [chicken, beans, rice, lettuce])
var guac = new Plate("Bowl O' Guac", "'Delish'", 6.50, [avacado, onion, lime, tequila])
var marg = new Drink('Margarita', "'Refreshing'", 7.50, [tequila, tripleSec, lime])


// marg.stringify();
// burrito.stringify();
// guac.stringify();

















