function blockingCodeForMoreThanASec(){

    for(let i=0 ; i<10000000000 ; i++){


    }
}

let x=10

setTimeout(()=>{

    console.log("Timer 1 done");
},1000)
blockingCodeForMoreThanASec();


setTimeout(()=>{
    console.log("Timer 2 done");
},500)

setTimeout(()=>{

    blockingCodeForMoreThanASec();
    x++;
    console.log("Timer 3 done");
},50)
blockingCodeForMoreThanASec();
x++