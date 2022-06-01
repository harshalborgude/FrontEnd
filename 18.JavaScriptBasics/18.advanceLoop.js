// advanced loopes are for of and for in.


const basket=['apples','oranges','grapes'];

const detailedBasket={
    'apples':5,
    'oranges':10,
    'grapes':100
}

//1 - for loop
for(let i=0; i<basket.length ; i++){
    console.log(basket[i]);
}

//2 - for each loop
basket.forEach(item =>{
    console.log(item);
})

//==============================================
// For of

//iterating over array and string
// for of loop only works for iterables , not over object.
for(item of basket){
    console.log(item);
}

for(item of 'basket'){
    console.log(item);
} 


//==============================================
// For in 

// for in loop over the object properties
// iterating over an object properties called as inumerating.
// for in loop works for both iterables and objects.
for(item in detailedBasket){
    console.log(item);
}



