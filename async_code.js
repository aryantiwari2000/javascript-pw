for(let i=0; i<100000000; i++){}
console.log("timer started");

setTimeout(()=>{
console.log("work for set tmer");
},10000)

console.log("Timmer Triggered");