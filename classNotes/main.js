//THIS IS INHERITANCE IN JAVASCRIPT


// var Monkey = function(name, color){ //constructor
// 	this.name = name
// 	this.color = color
// }

// Monkey.prototype.climb = function(tree){ //method
// 	console.log(this.name + ' climbs the ' + tree + 'tree.')
// }

// //instantiate a monkey
// var george = new Monkey('George', 'navajo white')
// george.climb('palm')

// var FlyingMonkey = function(name, color, wingspan){
// 	this.name = name
// 	this.color = color
// 	this.wingspan = wingspan
// }


// //need method again
// FlyingMonkey.prototype.climb = function(tree){ //method
// 	console.log(this.name + 'climbs the ' + tree + 'tree.')
// }

// FlyingMonkey.prototype.fly = function(){
// 	console.log(this.name + ' flew ' + this.wingspan * 10)
// }

//var evilGeorge = new FlyingMonkey('EvilGeorge', 'dodger blue', 9)
// new keyword is what creates an empty object {}

//DRY version!!!!!!!\\

var Monkey = function(name, color){ //constructor
	this.name = name
	this.color = color
}

Monkey.prototype.climb = function(tree){ //method
	console.log(this.name + ' climbs the ' + tree + 'tree.')
}

//instantiate a monkey
var george = new Monkey('George', 'navajo white')
george.climb('palm')

var FlyingMonkey = function(name, color, wingspan){
	//pass in monkey constructor and pass in (this = {})
	//we only pass in name and color, because the base class only cares about name 
	//and color. Regular monkeys don't have wingspan.	
	Monkey.call(this, name, color)  // this is good but they are not sharing methods (.climb)
	this.wingspan = wingspan
	console.log(this)
	}

// set up the base class first, then set sub class
//assigns the base constructor below.
FlyingMonkey.prototype = new Monkey() // here you call the Monkey then add...?
FlyingMonkey.prototype.constructor = FlyingMonkey // console evilGeorge.contructor to 
//learn more about the objects and to accuratly refer to the constructor property that it's being called from.
FlyingMonkey.prototype.fly = function(){ //constructor is a property on the prototype
	console.log(this.name + ' flew ' + this.wingspan * 10 + 'feet.')
}

var evilGeorge = new FlyingMonkey('Evil George', 'dodger blue', 9)
// new keyword is what creates an empty object {}

evilGeorge.climb('oak ')
evilGeorge.fly()

// the order we define things matters!