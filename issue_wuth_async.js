function createPromise(){
    

    return new Promise((res,rej)=>{

    res("Aryan")

    })

}

let pr= createPromise();

pr.then(function success(value){
 console.log("Pr promise with fulfill with value" , value);
},function failure(value){
    console.log("Pr promise with failure with value" , value);

}
)