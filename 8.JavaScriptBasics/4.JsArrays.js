
// Arrays
/*
1. Arrays can contain any type of variables.
2. Arrays with diff data type is not recommended as it may cause perforance issue.
3. var list methods : list.pop() , list.push() , list.shift() , list.concat() , list.sort()
4. list can contains functions also while will be accessed through indexes.

*/

var list = ["tiger","cat","bear","bird"];
alert(list[1]);

var numbers=[1,2,3,4,5,6,7];
var Boolean=[true,false,false,true,true];

var mixedArray=["apples",3,undefined,true,function mylist(){
    console.log("inside my list!");
}];

var functionList=[function apple(){
    console.log("apple");
}];