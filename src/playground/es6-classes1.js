// class Person {

// 	constructor(name ='brian' ){//better to add it here. 
// 		console.log('test')
// 		this.name = name || 'no name' //can add defaul here
// 		this.location = 'boston'
// 	}


// };


class Person {

	constructor(name ='Anonymous', age=0){
		
		this.name = name,
		this.age = age
		
	}

	getGreeting(){
	// return 'Hello ' + this.name

	return `Hello. I Am ${this.name}` //string interporlation
	}

	getDescription(){
		return `${this.name} is ${this.age} old`
	}


};

class Student extends Person{

	constructor(name, age, major) {
		super(name,age);
		this.major = major
	}

	hasMajor(){
		return !!this.major; //flips the value twice (if no major they will get false)
	}

	getDescription(){ //overrids the parent behavior
		let description = super.getDescription();

		if (this.hasMajor()) {
			description += ` there major is ${this.major}.`
		}
		return description
	}
}

class Traveler extends Person {
	constructor(name,age,location){
		super(name,age);
		this.location = location
	}

	getGreeting(){
		let greeting = super.getGreeting();
		if(this.location){
			greeting += (` i'm traverling from ${this.location}`)
		}

		return greeting
	}
}

const me = new Traveler('Brian Davenport', 34, 'boston')

const me2 = new Traveler

console.log(me.getGreeting())

console.log(me2.getGreeting())

// const me = new Person('Brian Davenport', 34) 

// console.log(me.getGreeting())
// console.log(me.getDescription())

// const other = new Person();

// console.log(other.getGreeting())

// console.log(other.getDescription())

// const student = new Student('Brian', 33, 'Education')

// const student2 = new Student()


// console.log(student.getDescription())

// console.log(student2.getDescription())