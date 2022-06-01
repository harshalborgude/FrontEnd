var css=document.querySelector("h3");
var color1=document.querySelector(".color1");
var color2=document.querySelector(".color2");
var body=document.getElementById("gradient");

console.log(body);

function changeColors(){
        console.log(color1.value);
        // body.style changes properties of css.
        body.style.background=
                "linear-gradient(to right, "
                + color1.value
                +", "
                +color2.value 
                +")";

        css.textContent = body.style.background +";";
        
}

// instead calling fun with event listner , we can add oninput and call function from there.
color1.addEventListener("input",changeColors);

color2.addEventListener("input",changeColors);