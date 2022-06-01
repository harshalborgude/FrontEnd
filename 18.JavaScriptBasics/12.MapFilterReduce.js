// Map , Filter , Reduce

const array = [1,2,10,16];
const doubleArray=[];

// map iterates through each elements and stores its operation result into another collection.
const mapArray= array.map(num=>{
    // this return will get mapped to mapArray.
    return num*2;
})

// reduced map for single line.
//const mapArray= array.map(num=> num*2);

console.log('map array',mapArray);

//====================================================

// Filter
// whichever number is greater than 5 will be return back.
const arrayFilter = array.filter(num =>{
    return num>5;
})
console.log('filter',arrayFilter);


//=====================================================

//Reduce
// inside accumulator can store the information of body.
// value given after func end is accumulators value.
const reduceArray = array.reduce((accumulater,num)=>{
    return accumulater+num;
},0)

console.log('reduce',reduceArray);
