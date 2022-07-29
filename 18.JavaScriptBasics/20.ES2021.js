// ECMAScript 2021
// 1) str.replaceAll   => replace all the instances , .replace was there with javascript but 
//    it was replacing only first instance.

//2) Promise.any() - out of all promises , it takes the promise which resolved first.
//   - What if none of the promises resolve? In that case Promise.any() throws an error!



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


//========================================================

// 2) Promise.any() - out of all promises , it takes the promise which resolved first.
//   - What if none of the promises resolve? In that case Promise.any() throws an error!

const p1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("A"), Math.floor(Math.random() * 1000));
  });
  const p2 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("B"), Math.floor(Math.random() * 1000));
  });
  const p3 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("C"), Math.floor(Math.random() * 1000));
  });

  (async function () {
    const result = await Promise.any([p1, p2, p3]);
    console.log(result); // Prints "A", "B" or "C"
  })();