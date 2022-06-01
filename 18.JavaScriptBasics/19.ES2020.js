/* Features of ES2020
1) BigInt -> 1n
2) Optional Chaining Operator -> ?
3) Nullish Coalescing Operator -> ??
4) Promise.allsettled.
5) globalThis.

*/

//============================================
// 1) BigInt -> number having n suffix becomes a bigInt number.
// Big int is used when we are going to use number which is greater that MAX_SAFE_INTEGER
// this bigger numbers should be suffix with n.

typeof 1n;


//=============================================
// 2) Option chaining Operator -> ?

let myObj={
    Harshal_Details:{
        name:"harshal",
        sirName:"borgude"
    }
}

let sirName = myObj.Harshal_Details.sirName;

if(myObj.Harshal_Details && myObj.Harshal_Details.name){
    // do something
}

// instead of doing this checks , there is a better way.
// using this "?" we can check weather this term is present of not.

let name=myObj?.Harshal_Details?.name;
console.log(name);


//=====================================================
// 3) Nullish Coalescing Operator -> ??   => instead of "OR" operator we can use this.
// if undefined or null then only will return optional value.

let myObj1={
    Harshal_Details:{
        name:"harshal",
        sirName:"borgude",
        profession :0
    }
}

// if that parameter exist then will get value or will get not entered.
let sirName1 = myObj1?.Harshal_Details?.profession || "not entered";
console.log("1",sirName1);
//=> not entered

// instead of that or operator , can use ?? and if blanck value is there then it will retrieve that.
let sirName2 = myObj1?.Harshal_Details?.profession ?? "not entered";
console.log("2",sirName2);
//=> 0










