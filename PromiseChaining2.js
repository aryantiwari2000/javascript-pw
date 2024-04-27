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

    console.log("Executing r1 guys wohooooo", value);
    throw 700
})
.then(function g(value){
    console.log("Value in second then", value);
    return value*2

}, function r2(value) {
    console.log("Chill bro!! i am there", value);
}
)
.then(function h(value){
    console.log("Value in third then", value);
    return value*2

})