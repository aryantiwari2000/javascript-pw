function createAsyncPromise(){

    return new Promise ((res,rej)=>{
    
    setTimeout(function timerCompleate(){
    
     const value= Math.random();

     if(value<0.5){

        res(value)
     }
     else{
        rej(value)
     }
    },5000)
    })




}

const response=createAsyncPromise();