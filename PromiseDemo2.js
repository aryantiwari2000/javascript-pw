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

const responce = createAsyncPromise();
console.log("Promise" ,responce);

for(let i=0; i<10000000000; i++){}

console.log("Promise" ,responce);
for(let i=0; i<10000000000; i++){}