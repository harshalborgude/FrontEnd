

var database = [
    {
        username:"harshal",
        password:"password"
    },
    {
        username:"harshal1",
        password:"password1"
    },
    {
        username:"harshal2",
        password:"password2"
    },
    {
        username:"harshal3",
        password:"password3"
    },
    {
        username:"harshal4",
        password:"password4"
    }

];

var newsFeed=[
    {
        username:"Bobby",
        timeline:"So tired from all that learning."
    },
    {
        username:"sally",
        timeline:"javascript is so cool!"
    }
];

var userNamePrompt = prompt("What's your user name?");
var passwordPrompt = prompt("Enter your password?");
signIn(userNamePrompt,passwordPrompt);

// console.log("username :"+userNamePrompt+",password :"+passwordPrompt);

function isUserValid(user,pass){

    for(var i=0;i<database.length;i++){
        console.log("username :"+database[i].username+",password :"+database[i].password);
        if((user===database[i].username)&&(pass==database[i].password)){
            console.log("returning true!");
            return true;
        }
    }
    return false;
}

function signIn(user,pass){
    if(isUserValid(user,pass)){
        console.log(newsFeed);
    }
    else{
        alert("Sorry wrong userName and password!");
    }
}