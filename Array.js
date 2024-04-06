// let array= Array(20)
// console.log(array);

// console.log(array.length);

// let arraywithAll10= Array(20).fill(10)
// console.log(arraywithAll10);



// let arraywith0inRange= Array(20).fill(-1,3,7) //[3,7)
// console.log(arraywith0inRange);



// let arr =[10,20,30,50,60]

// arr[3]=99
// arr[0]=0

// console.log(arr);


// let ar=Array(5)
// console.log(ar);
// console.log(ar[0]);



// let x= [10,20,30,50]

// // console.log(x);
// x.push(60)

// console.log(x)

// x.unshift(12)
// console.log(x);


// x.shift()

// console.log(x);

// x.pop();
// console.log(x);


// let arr = [10, 20, 30, 40, "sanket", 60, 70];
// console.log(arr.slice(1,4));

// console.log(arr.slice(-4,-2));
// console.log(arr.slice(-7,-2));

// console.log(arr.slice(3));



// let arr = [9,8,7,6,5,4,3,2,1];

// console.log(arr.slice(1,4))
// console.log(arr.slice(1))


// let array = [9,8,7,6,5,4,3,2,1];
// const res = array.splice(3,4,-1,-2,-3,-4,-5,-6);
// console.log(array);

/**
 * join -> it combines elements of an array into a String
 */

// let arr = [3,2,1,4,5];


// let result= arr.join()
// console.log(result);



// let result2= arr.join(" ")
// console.log(result2);


/**
 * 
 * delete  -> operator
 */


// let array = [32,23,4,5,1,6,0];

// delete array[1]

// console.log(array);


// console.log(array[1])


//for each

let arr = [1,2,3,4,5];

for(let i=0; i< arr.length; i++){

    console.log("Elemnt of index" ,i ,"is" ,arr[i]);
}
console.log(arr);


arr.forEach((element,idx)=>{

    console.log("Element at index ", idx, "is", element);
})
console.log("*******")


function customForEach(arr,cb){

    for(let i=0; i<=arr.length; i++){
     
    cb(arr[i],i);
}
}

customForEach([1,2,3],(element,idx)=>{
 console.log("Element at index ", idx, "is", element);
})


