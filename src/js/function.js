function myFunc(theObject){
	theObject.make = "Toyota";
}
const myCar = {
	make: "Honda",
	model:"Accord",
	year: 1998,
};
console.log(myCar.make);
myFunc(myCar);
console.log(myCar.make);
// factorial of a number
const factorial = function fac(n){
	return n < 2 ? 1 : (n* fac(n-1));
}
console.log(factorial(4));
console.log(fac(5));
