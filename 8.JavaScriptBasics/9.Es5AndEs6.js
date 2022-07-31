/*
let + const : instead of var we will be using let and const in advanced javascript.const will be constant value
with const , we cant assign new value again to var . but to json object cant be initialized but vakues of json can be changed. 
Promises : A promise is an object that may produce a single value some time in the future.Either a result value 
or a reson that its not resolved (rejected)
- Promise can have 3 values - fullfill , rejected , pending.
-  Promises are great in asynchronous programming.

*/


const player ='bobby';
let experience= 100;
let wizardLeve= false;

// here instead of let , if use var , var will not create separate scope in if , but let will create.
// so we should use "let" instead of var .
if(experience>90){
    let wizardLeve=true;
    console.log('inside',wizardLeve);  // wz = true
}

console.log('outside',wizardLeve);  // wz = false 

//======================================================================
// New ways to declare objects : using below way , we can assign dynamic values to objects.

const obj={
    [name]:'Hello',
    [1+2] :'hehehe'
}

//========================================================================

// Template String => `"String"+'String'`   -> this called as template string , we can use anything either single or double quotes in this string.
const name="Harsh";
const age= 34;
const pet="horse";

//const greeting = "Hello "+name+" you seems to be doing "+ greeting +"!";

const greetingBest = `Hello ${name} you seem to be ${age-10}.what  a lovely ${pet} you have`; //-> Hello Harsh you seem to be 24.what  a lovely horse you have

//========================================================================

//Default Arguiments

function greet(name='me',age=30 , pet='cat'){
    return `Hello ${name} you seem to be ${age-10}.what  a lovely ${pet} you have`;
}

greet("harsh",40,"dog");

//===========================================================================

// Arrow Fuctions.
function add(a,b){
    return a+ b;
}

//or 

const add = (a,b) =>{
    return a+b;
} 

// or final

const add = (a,b) =>a+b;


//=========================================================================

// Promises
// Promises : A promise is an object that may produce a single value some time in the future.Either a result value 
// or a reson that its not resolved (rejected)
// - Promise can have 3 values - fullfill , rejected , pending, 
// - if promise fullfilled , then it returns value.
// -  Promises are great in asynchronous programming.

const promise=new Promise((resolve , reject)=>{
    if(true){
        resolve('stuff worked');
    }else{
        reject('Error , it broke!');
    }
    
});
    promise
    .then(result => result + " !")
    .then(result2 => {
        throw Error;
        console.log('result :',result2);
    })
    .catch(() => console.log('Error...'));
    // catch method will catch any error occures between the chain of .then.

    /*const promise2 = new Promise((resolve,reject)=>{
        setTimeout(resolve,100,'Hiii');
    })

    const promise3 = new Promise((resolve,reject)=>{
        setTimeout(resolve,1000,'Hello');
    })

    const promise4 = new Promise((resolve,reject)=>{
        setTimeout(resolve,3000,'Welcome');
    })

    Promise.all([promise,promise2,promise3,promise4])
        .then(values =>{
            console.log(values);
        })*/

    
// Real life Use of promises 
const urls = [
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/todos',
    'https://jsonplaceholder.typicode.com/posts'
]

Promise.all(urls.map(url=>{
    return fetch(url).then(response=>response.json());
})).then(results => {
    console.log(results[0]);
    console.log(results[1]);
    console.log(results[2]);
}).catch(()=>{
    console.log('Error!');
})


       
