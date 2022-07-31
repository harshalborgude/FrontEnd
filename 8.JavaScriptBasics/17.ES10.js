// ECMAScript 10
/*
1) .flat() => it will make all the nesting of variables and make it flat.we can provide number of layers to remove
            // default is 1. flat method also clean up the data.
2) .flatmap() => will flatten the array and can map it.
3) .trimStart() and .trimEnd() => can trim at start
4) fromEntries  => transforms a list of key value pair into an object.
                => exact opposite of .entries() as it converts object into array of entries.
5) try{

}catch{

}               => allows to try a code and catch exceptions.

*/

const array=[1,[2,3],[4,[5],6]];
array.flat(1); // [1,2,3,4,[5],6]
// 2 layers to be flattened.
array.flat(2); // [1,2,3,4,5,6]

//======================================

let useremail1 ='      harshalborgude933@gmail.com';
let useremail2 ='harshalborgude933@gmail.com      ';
useremail1.trimStart();
useremail2.trimEnd();


//=======================================

const userProfile =[["harsh1",15],["harsh2",16],["harsh3",18]];
Object.fromEntries(userProfile);
// {harsh1: 15,harsh2: 16,harsh3: 18}


//==========================================

try{
    bob+'hi';
}catch(error){
    console.log("You messed up"+error);
}
// You messed upReferenceError: bob is not defined



