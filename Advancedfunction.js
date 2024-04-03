// const arr = [1,2,3,4,5];


// arr.forEach(function printer(value) { console.log("Value is", value); });

// function processArray(array,fn){

// for (let i=0; i<=array.length;i++){

//     console.log(i , array[i] , fn(array[i]))
// }


// }
// processArray( [2,3,4,5] , function cube(x){ return x*x*x } )


// function fun(){

//     console.log("called the function fun");

//     return function cleanUp(){
//         console.log("cleaning up the resores")
//     }
// }
// const res= fun();
// console.log(res);
// res();

// function downloadScriptFromIdeoneAndPopulateDatabase() {
//     // this was an old function

//     console.log("Old function implementation");
// }


// // more code  8000 lines
// downloadScriptFromIdeoneAndPopulateDatabase();
// somewhere between



// intern by mistake makes the same function
// To solve this, we can wrap the whole intern's code that can break, into an IIFE      
// Docs: https://developer.mozilla.org/en-US/docs/Glossary/IIFE

//     function downloadScriptFromIdeoneAndPopulateDatabase() {
//         console.log("New function created");
//     }
//     console.log("Calling intern code")
//     downloadScriptFromIdeoneAndPopulateDatabase();



// downloadScriptFromIdeoneAndPopulateDatabase();

const obj = {

    fun1: function f(x){
        console.log("F is called");

        return {
             fun2:function g(){
                console.log("g is called");
             }
        }
    }
}
obj.fun1(10).fun2();