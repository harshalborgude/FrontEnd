
// javascript is a synchronous programming , means it executes program line by line.
//for asynchronous programming. timeout in seconds have given as second arguiment.

/*
1) CALL STACK
2) WEB API
3) CALLBACK Queue  -> something is ready to run in queue.
4) EVENT Loop
*/

// 1) CAll Stack
console.log('1');
setTimeout(()=>{      // with timer of 2000msec
    console.log('2')
},2000);
console.log('3');




//====================================================================
/* Web API

JavaScript web API
1) DOM (document)
2) AJAX (XML HttpRequest)
3) Timeout (setTimeout)
4) CallBack

*/

//=====================================================================
// WebPack -> to bundle all the js files and get a single file.

module.export = {
    entry : './main.js',
    output :{
        path :'./dist',
        filename : 'bundle.js'
    }
}

// import and export statements are used to import files or variables and import to import them.