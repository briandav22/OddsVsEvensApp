// const add = function (a,b ){
// 	console.log(arguments)

// 	return a + b ;
// }

// console.log(add(55,5, 9))

//can't use arugments anymore in arrow functions
// const add = (a,b)=> {
// 	console.log(arguments)
// 	return a + b;
// }

// const user = {
// 	name: "Brian",
// 	cities: ["boston", "dover", "newyork"],
// 	printPlacesLived: function() {
// 		console.log(this.name);
// 		console.log(this.cities);
// 		const that = this //can't use this in a nested function, so use that. 

// 		this.cities.forEach(function(city){
// 			console.log(that.name + ' has lived in' + city)
// 		})
// 	}
// };


// const user = {
// 	name: "Brian",
// 	cities: ["boston", "dover", "newyork"],
// 	printPlacesLived: function ()  { //cant use arrow here,no parent scope to bind to 
// 		console.log(this.name);
// 		console.log(this.cities);
		
// 		//can use this.name here , binds to parent scope
// 		this.cities.forEach( (city)=>{
// 			console.log(this.name + ' has lived in' + city)
// 		})
// 	}
// };

// user.printPlacesLived();

//es6 methos definiations
// const user = {
// 	name: "Brian",
// 	cities: ["boston", "dover", "newyork"],
// 	printPlacesLived()  { //cant use arrow here,no parent scope to bind to 

// 		return this.cities.map((city)=> this.name + ' has live in ' + city);

		


// 		//can use this.name here , binds to parent scope
// 		// this.cities.forEach( (city)=>{
// 		// 	console.log(this.name + ' has lived in' + city)
// 		// })
// 	}
// };

// console.log(user.printPlacesLived());

const multiplier = {
	numbers: [2,4,6],
	multiplyBy: 4,
	multiply(){
		console.log(this.numbers);
		console.log(this.multiplyBy);
		return this.numbers.map((number)=>number * this.multiplyBy)
	}
}



console.log(multiplier.multiply())