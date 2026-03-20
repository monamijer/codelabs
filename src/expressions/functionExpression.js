"use strict"
function f(){
	console.log('F! function');
	return 2;
}
function g(){
	console.log('G!');
	return 3;
}
let x,y ;
y = x = f();
console.log(y);
y = [f(), x=g()];
console.log(y);
x[f()] = g();
