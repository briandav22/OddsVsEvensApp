var nameVar = "Andrew";
var nameVar = "Brian";

console.log("namevar", nameVar);

let namelet = "jet ";
namelet = "bet";
console.log("namelet", namelet);

const nameConst = "Tom";

console.log("nameConst", nameConst);

//block scoping

const fullName = "Brian Davenport";

let firstName; //need to define variable out here in order to define it in the block. 

if (fullName){
	firstName = fullName.split(' ')[0]
	console.log(firstName)
}


console.log(firstName)