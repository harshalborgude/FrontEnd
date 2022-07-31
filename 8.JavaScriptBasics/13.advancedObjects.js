// here obj1 and obj2 will have same addrs and obj2 will point to obj1. obj1 is equal to obj 2 but obj1!=obj3

var object1 = {value:10};
var object2 = object1;
var object3 = {value:10};


class Player {
    //whenever constructor function get invoked , it will create name and player property.
    constructor(name,type){
        this.name=name;
        this.type=type;
        console.log('Player',this);
    }
    introduce(){
        console.log(`Hi , i am ${this.name},i am ${this.type}`);
    }
}

class wizard extends Player{
    constructor(name,type){
        //calling constructor of parent class i.e player.
        super(name,type);
        console.log('wizard',this);
    }
    play(){
        console.log(`weeeeeeee i am ${this.type}`);
    }
}

// object of the wizard class.
const wizard1 = new wizard('harshal','Programmer');
wizard1.introduce();



//==============================================================
//Pass by reference V/S Pass by value 
/*
1) in pass by value , values of the objects gets passed to another variable , so have diff spaces
2) in pass by reference , another objects gets pointed to same old object , change in value of 
   one will effect others value as same space.
   - this helps in saving memory.
   - by mistake values can get change by another objects.
   - arrays are objects , they are passed by reference.

*/

var c =[1,2,3];
var d =c;

d.push(30);   // d = [1,2,3,30] also c = [1,2,3,30] both gets modified as passed by reference.
//so the solution to make it pass by value is.

var e = [].concat(c);

//-----------------------------------

let obj = {a:'a',b:'b',c:'c'};
let clone = Object.assign({},obj);
let clone2 = {...obj}           //another way to clone the object obj.

obj.c=5;       // modifying the value within obj.
// if we clone one object but any object is there inside then it will be passed by reference , so it will be shallow cloning for  nested object.
// To avoid shallow clonnig use below method.

let superClone = JSON.parse(JSON.stringify(obj));  // converting object to string and again to json object.It do the deep clone of the object.

