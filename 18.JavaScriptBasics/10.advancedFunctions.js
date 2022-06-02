// () => in this way we can declare anonymous functions (lambda expressions)

const first=() =>{
    const greet="hi";
    const second =()=>{
        alert(greet);
    }
    return second;
} 

// the return of first will get stored in const newFunc. return will be second function.
const newFunc = first();
// here newFunc will have second function as it is returned by first func.
newFunc();
// Closures - child scope always have access to parent scope.
// -> the function ran , the fun executed ,its never going to run again but it will remember parent scope values.
// so newfunc() => {
//    alert(greet);
//}
// here greet var is not there but this scope will remember its value.

//====================================================================

//   Currying   -> converting a func which takes multiple args into a function which takes them one at a time.
const multiple = (a,b) => a*b;
const curriedMultiply = (a) => (b) => a*b;
curriedMultiply(3);
curriedMultiply(3)(4);


//=====================================================================

// Compose 




// adding 4th changes to git

