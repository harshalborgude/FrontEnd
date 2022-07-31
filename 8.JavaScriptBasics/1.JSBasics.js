/*
1) Java Script Data Types : Number , String , Boolean , Undefined , Null , Symbol , Object
2) String -> "str1"+"str2"
3) Boolean -> 1===1 -> true
4) var -> variables can hold any javascript type.

*/

//this main can have problem in js.

var num1 = prompt("Enter a number :");
var num2 = prompt("Enter second number :");
var operation = prompt("Enter operation (+,-,/,*)");
var result;

switch (operation) {
    case "+": result = Number(num1) + Number(num2);
        break;
    case "-": result = Number(num1) - Number(num2);
        break;
    case "*": result = Number(num1) * Number(num2);
        break;
    case "/": result = Number(num1) / Number(num2);
        break;
    default: result = "Undefined Operation";

}
alert("Result :" + result);
