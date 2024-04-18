function createAsyncPromise(){

    return new Promise((res,rej)=>{
    
    setTimeout(function timercompleated(){
    
    const value = Math.random();
    if(value<0.5){
    
        res(value)
    }
    else{
    
        rej(value)
    }
    
    
    },5000)
    
    
    })
    
    }

    const responce= createAsyncPromise();

    responce.then(function fulfilledHandler(value){
     console.log("Promise fulfilled", value),function rejecthandler(value){
      console.log("Promise rejected",value);
     }
    })
    