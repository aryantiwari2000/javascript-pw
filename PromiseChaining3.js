function createPromise(time){
 
    return new Promise((res,rej)=>{

        setTimeout(() => {
            
            rej(time)
        },time);
    })

}

createPromise(1000)
.then(function f(value){
    console.log("Value in first then", value);
    return value*2

},function r1(value){

    console.log("handler of p1");
    throw 300
})
.then(function g(value){
    console.log("Value in second then", value);
    return value*2

})
.then(function h(value){
    console.log("Value in third then", value);
    return value*2

})
.catch((error)=>{
console.log(("some exeption came between" , error));
})