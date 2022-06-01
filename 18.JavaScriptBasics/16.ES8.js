//ECMAScript 8
/*
1) .padStart() and .padEnd();
2) Extra comma with arguments are valid.
3) Object.values , Object.entries , Object.keys
4) Async Await -> ES9
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

