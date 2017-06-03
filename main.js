/*//Task 12;

function getMax(arr) {
	if (!(arr instanceof Array)) {
		return "The argument have to be an array!";
	}

	return Math.max.apply(null,arr);
}

var x, y, z; 
x = [5,45,5,45,87,51213,5,48,4];
y = "blue";

console.log(getMax(x));
console.log(getMax(y));
console.log(getMax(z));

//Task 13;

function arrRevers(arr) {
	if (!(arr instanceof Array)) {
		return "The argument have to be an array!";
	}
	var reserv;
	for (i = 0; i<arr.length/2; i++) {
		reserv = arr[i];
		arr[i] = arr[arr.length-1-i];
		arr[arr.length-1-i] = reserv;
		console.log(i);
	}
	return arr;
}

var x, y, z; 
x = [5,45,5,45,87,51213,5,48,4,98];
y = "blue";

console.log(arrRevers(x));
console.log(arrRevers(y));
console.log(arrRevers(z));

//Task 14;

function checkIfOccurs(arr, a) {

	if (!(arr instanceof Array)) {
		return "The argument have to be an array!";
	}

	if (typeof(a) != "number" || isNaN(a) || !isFinite(a)) {
		return "The argument have to be a number!";
	}

	for (i = 0; i<arr.length; i++) {
		if (arr[i] === a) {
			return "The number "+a+" occurs in the array!";
		}	
	}
	return "The number "+a+" is not occurs in the array!";
}

var x, y, z; 
x = [5,45,'5',45,87,51213,NaN,9,4,98];
y = "blue";
z = [5,4,9];

//console.log(checkIfOccurs(z, 9));
//console.log(checkIfOccurs(x, NaN));
//console.log(checkIfOccurs(x, Infinity));
console.log(checkIfOccurs(x, y));
console.log(checkIfOccurs(x, 4));

//Task 15;

function getOddPosEl(arr) {

	if (!(arr instanceof Array)) {
		return "The argument have to be an array!";
	}
	var newArr = [];

	for (i = 1; i<arr.length; i+=2) {
		newArr.push(arr[i]);
	}
	return newArr;
}

var x, y, z; 
x = [5,45,'5',45,87,51213,NaN,9,4,98];
y = "blue";
z = [5,4,9];

console.log(getOddPosEl(x));
console.log(getOddPosEl(y));
console.log(getOddPosEl(z));

//Task 16;

function arrSum(arr) {

	if (!(arr instanceof Array)) {
		return "The argument have to be an array!";
	}
	var sum = 0;
	for (i = 0; i<arr.length; i++) {
		if (typeof(arr[i]) != "number" || isNaN(arr[i]) || !isFinite(arr[i])) {
		return "The elements of the array have to be a number!";
		}
		sum += arr[i];
	}
	return sum;
}

var x, y, z; 
x = [5,45,'5',45,87,51213,NaN,9,4,98];
y = "blue";
z = [5,4,9,45,7];

console.log(arrSum(x));
console.log(arrSum(y));
console.log(arrSum(z));

//Task 17;

function chackPalind(str) {

	if (typeof(str) != "string" || !str.length) {
		return "Please, enter a word!";
	}
	for (i = 0; i<str.length/2; i++) {
		if (str[i] != str[str.length-1-i]) {
			return "The entered word is not a polindrome!"
		}
	}
	return "The entered word is a polindrome!";
}

var x, y, z; 
x = 5;
y = "blue";
z = "abrarba";

console.log(chackPalind(x));
console.log(chackPalind(y));
console.log(chackPalind(z));

//Task 18;

//For-loop----- see Task 16;

//While-loop

function arrSum(arr) {

	if (!(arr instanceof Array)) {
		return "The argument have to be an array!";
	}
	var sum = 0;
	var i = 0;

	while (i<arr.length) {
		if (typeof(arr[i]) != "number" || isNaN(arr[i]) || !isFinite(arr[i])) {
		return "The elements of the array have to be a number!";
		}
		sum += arr[i];
		i++;
	}
	return sum;
}

var x, y, z; 
x = [5,45,'5',45,87,51213,NaN,9,4,98];
y = "blue";
z = [5,4,9,45,7];

console.log(arrSum(x));
console.log(arrSum(y));
console.log(arrSum(z));

//Recursion

function arrSum(arr) {
	if (!(arr instanceof Array)) {
		return "The argument have to be an array!";
	}
	for (i = 0; i<arr.length; i++) {
		if (typeof(arr[i]) != "number" || isNaN(arr[i]) || !isFinite(arr[i])) {
		return "The elements of the array have to be a number!";
		}
	}
	if (arr.length == 1) {
		return arr[0];
	}
	var sum = 0;
	sum += arr.pop() + arrSum(arr);
	return sum;
}

var x, y, z; 
x = [5,45,'5',45,87,51213,NaN,9,4,98];
y = "blue";
z = [5,4,9,45,7];

console.log(arrSum(x));
console.log(arrSum(y));
console.log(arrSum(z));

//Task 19;

//part 1

function chackPerfSqu(arr) {
	if (!(arr instanceof Array)) {
		return "The argument have to be an array!";
	}
	var newArr = [];
	for (i = 0; i<arr.length; i++) {
		if (typeof(arr[i]) != "number" || isNaN(arr[i]) || !isFinite(arr[i])) {
		return "The elements of the array have to be a number!";
		}
		
		if (Math.sqrt(arr[i])%1 === 0) {
			newArr.push(arr[i]);
		}
	}
		return newArr;
}

var x, y, z; 
x = [5,45,'5',45,87,51213,NaN,9,4,98];
y = "blue";
z = [5,4,9,45,7];

console.log(chackPerfSqu(x));
console.log(chackPerfSqu(y));
console.log(chackPerfSqu(z));

//part 2

function chackPerfSqu() {
	
	var newArr = [];
	var count = 0;
	for (i = 0; count<20; i++) {
		
		
		if (Math.sqrt(i)%1 === 0) {
			newArr.push(i);
			count++;
		}
	}
		return newArr;
}

console.log(chackPerfSqu());

//Task 20;

function conc(arr1,arr2) {
	if (!(arr1 instanceof Array) || !(arr2 instanceof Array)) {
		return "The arguments have to be an array!";
	}
	var newArr = arr1.concat(arr2);
	return newArr;
}

var x, y, z; 
x = [5,45,'5',45,87,51213,NaN,9,4,98];
y = "blue";
z = [5,4,9,45,7];

console.log(conc(x,y));
console.log(conc(x,z));*/

//Task 21;

function combin(arr1,arr2) {
	if (!(arr1 instanceof Array) || !(arr2 instanceof Array)) {
		return "The arguments have to be an array!";
	}
	var max, newArr;
	max = Math.max(arr1.length,arr2.length);
	newArr = [];
	for (i = 0; i < max; i++) {
		if (i <= arr1.length) {
			newArr.push(arr1[i]);
		}
		if (i <= arr2.length) {
			newArr.push(arr2[i]);
		}
	}
	
	return newArr;
}

var x, y, z; 
x = [5,45,'5',45,87,51213,NaN,9,4,98];
y = "blue";
z = [5,4,9,45,7];

console.log(combin(x,y));
console.log(combin(x,z));
