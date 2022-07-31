
var todos =[
    "wake up early",
    "do javascript lectures",
    "have breakfast",
    "have lunch"
]

// for Loop 
for(var i=0;i<todos.length;i++){
    console.log(todos[i]);
}

// while loop. 
var count=0;
while(count < todos.length){
    console.log(count);
    count++;
}

// do while 
var count2=10;
do{
    console.log(count2);
    count2--;
}while(count2<todos.length);

// for each 
todos.forEach(function(todo){
    console.log(todo);
})