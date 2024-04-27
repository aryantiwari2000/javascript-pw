function createPromise(time){

    return new Promise((res,rej)=>{
        setTimeout(()=>{
         
            res(time)

        }, time)



    })
}

createPromise(1000)
.then(function f(value){
   console.log("value of first then" ,value);
   return value*2
})
.then(function g(value){
    console.log("value of the second then" , value);
    return value*2
})
.then(function h(value){
    console.log("value of the third then" , value);
    return value*2
})