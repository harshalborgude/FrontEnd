//ECMAScript 8
/*
1) .padStart() and .padEnd();
2) Extra comma with arguments are valid.
3) Object.values , Object.entries , Object.keys
4) Async Await -> It is built on top of the promises.

// ECMAScript 9 / ES2018
//1) Object spread operator.
//2) Finally block after promise and catch.
//3) for await of.

*/

//=============================

"Turtle".padStart(10);  // 10 spaces at starting
"Turtle".padEnd(10);    // 10 spaces after end of turtle.


//=============================

const fun = (a,b,c,d,)=>{
    console.log(a);
}

// fun will work with extra comma also , it will not give error.
fun(1,2,3,4,);

//==============================
Object.values 
Object.entries 
Object.keys


let Obj = {
    username0: 'santa',
    username1: 'Rudolf',    
    username2: 'Mr.Harshal'
}
// iterating the object using Object.keys(Obj)
Object.keys(Obj).forEach((key,index)=>{
    console.log(key , Obj[key]);
})

// iterating the object using Object.values(Obj)
Object.values(Obj).forEach(value=>{
    console.log(value);
})

// iterating the object using Object.entries(Obj)
Object.entries(Obj).forEach(value=>{
    console.log(value);
})

//===============================================

// Async Await
// Async await is same as promises only having different syntax.working of both is almost same.

//Example 1
movePlayer(100,'Left')
    .then(()=> movePlayer(400,'Left'))
    .then(()=> movePlayer(10,'Left'))
    .then(()=> movePlayer(330,'Left'))
// Here  both above promises and below asynch await have same functionality.
async function playerStart(){
    const firstMove = await movePlayer(100,'Left'); // pause
    await movePlayer(400,'Left'); // pause
    await movePlayer(10,'Left'); // pause
    await movePlayer(330,'Left'); // pause
}

//Example 2
fetch('https://jsonplaceholder.typicode.com/users')
    .then(Response=> Response.json())
    .then(users=> this.setState({ robots: users }))

async function fetchUsers(){
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    console.log(data);
}    
fetchUsers();

// Example 3 with asynch await.
// With promise
const urls = [
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/todos',
    'https://jsonplaceholder.typicode.com/posts'
]

/*Promise.all(urls.map(url=>{
    return fetch(url).then(response=>response.json());
})).then(results => {
    console.log(results[0]);
    console.log(results[1]);
    console.log(results[2]);
}).catch(()=>{
    console.log('Error!');
})*/

// with async await
const getData = async function(){
    try{
        const [users,todos,posts]= await Promise.all(urls.map(url=>{
            return fetch(url).then(response=>response.json());
        }))
            console.log('users',users);
            console.log('todos',todos);
            console.log('posts',posts);
        }catch(error){
            console.log('Error , urls not worked!',error);
        }
    }
    
getData();



//=================================================================

// ECMAScript 9 / ES2018
//1) Object spread operator.
//2) Finally block after promise and catch.
//3) for await of. - It allows us to loop through async await

//1) Object spread operator.
//Example 1
const animal={
    tiger : 20,
    lion : 5,
    monkey : 2,
    bird : 40
}

function objectSpread(p1,p2,p3){
    console.log(p1)
    console.log(p2)
    console.log(p3)
}

const {tiger, lion, ...rest} = animal;
// here tiger will have 20 value,lion will have 5 and rest will contain monkey and bird.
objectSpread(tiger,lion, rest);




//Example 2
const array = [1,2,3,4,5];
function sum(a,b,c,d,e) {
    return a+b+c+d+e;
}
// OR
sum(...array);

//2) Finally block after promise and catch.


// 3) for await of. - It allows us to loop through async await.

const urls2 = [
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/todos',
    'https://jsonplaceholder.typicode.com/posts'
]

const getData2 = async function(){
    const arrayOfPromises = urls2.map(url => fetch(url));
    for await (let request of arrayOfPromises){
        const data = await request.json();
        console.log(data);
    }
}
getData2();