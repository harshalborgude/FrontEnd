// Type coersion means if left hand side and right hand side operand of operator have different type but
// have same meaning then it will show it as same.
// When we use "==" -> double equal then type coersion happens.


1 == '1'  
//=> true

-0 === +0
//=> true


// Object.is works same as "==="
Object.is(-0,+0); 

