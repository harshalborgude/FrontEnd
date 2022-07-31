// DOM events


// This get Elements by tagname returns array of buttons. 
// var button = document.getElementsByTagName("button")[0];

// 1. Take care about spellings 
// 2. Click is a DOM event. ->"click","mouseenter","mouseleave" 

// button.addEventListener("mouseenter",function(){
//     console.log("Click!!!");  
// })


var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

// On click event , it gets the li Elements , and appends node to li and that li appended to ul. 
// Adding html elements in this way 
/*
button.addEventListener("click",function(){
    // console.log("Click is working!");
    var li = document.createElement("li");
    li.appendChild(document.createTextNode("testing"));
    ul.appendChild(li);
}) */

function inputLength() {
    return input.value.length;
}

function createListElements() {
    console.log(input.value);
    var li = document.createElement("li");
    // input.value will give the value associated with input class.
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    // after getting and processing value , again making it null.
    input.value = "";
}

function addListAfterClick() {
    if (inputLength() > 0) {
        createListElements();
    }
}

function addListAfterEnter(event) {
    //console.log(event);             // this event object will have lot of parameter related to that keypress event.
    // event.which , event.code also works same as event.keycode , here 13 is keycode for enter button event.
    if ((inputLength() > 0) && (event.keyCode == 13)) {
        createListElements();
    }

}

//on click event , it gets the li elements, and append node to li , and that li appended to ul.
//adding html elements in this way  
//Here addListAfterClick is a callback function , as it gets called and passed required parameters to be passed.
// no need of () <- this braces.
button.addEventListener("click", addListAfterClick);

// to get enter keyboard event, after keypress function recieves one event parameter.
input.addEventListener("keypress",addListAfterEnter);

