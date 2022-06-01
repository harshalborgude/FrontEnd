// ECMAScript 2021
// 1) str.replaceAll   => replace all the instances , .replace was there with javascript but 
//    it was replacing only first instance.



let str ="let me know something, something great";
let str1=str.replaceAll('something','everything');
console.log(str1);


//======================================================

// debugger  -> keyword acts as a breakpoint in javaScript.
// it will also shows the values contained by variables.

let array=[1,2,3,4,5,6,,7];
let addition=0;

array.forEach(num=>{
    addition=addition+ num;
    debugger;
})