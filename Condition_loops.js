//while loop

// let i=1;

// while(i<=10){
//     console.log(i);
//     i++
// }

// let a=20;
// while(a>=1){
// console.log(a);
// a=a-1;
// }

//switch case

// switch(10 + 5) {
//     case 10:
//         console.log("Case 1");
//         console.log(10);
//         break;
    
//     case 11:
//         console.log("Case 2");
//         console.log(11);
//         break;
//     case 12:
//         console.log("Case 3");
//         console.log(15);
//         break; // breaks you out of switch
    
//     case 13:
//         console.log("Case 4");
//         console.log(13);
//         break; // breaks you out of switch

//     default:  // case when expression doesn't match anything
//         console.log("no match");
// }


//sumofdogots

// let x=1005;
// let sum=0;
// while(x>0){
// let lastDigit = x%10
// sum += lastDigit;

// //remove the last digit from x
// x=Math.floor(x/10);

// }


// let total_rows =5;

// for(let i=1; i<=total_rows; i++){

//     for(let j=1; j<=i; j++){
//         Process.stdout.write("*");
// }
//    console.log();
// }

let total_rows = 10;
for(let i = 1; i <= total_rows; i++) {

    // the below for loop prints i stars for ith row in same line
    for(let j = 1; j <= i; j++) {
        process.stdout.write("*"); /// ***
    }
    // for the next row, we need to go to a new line
    console.log(); // gives a new line -> process.stdout.write("\n");

}

let n = 5;
for(let i = 1; i <= n; i++) {

    // the below for loop prints i stars for ith row in same line
    for(let j = 1; j <= n; j++) {
        process.stdout.write("*"); /// ***
    }
    // for the next row, we need to go to a new line
    console.log(); // gives a new line -> process.stdout.write("\n");

}


//do while

let i =0;

do{

    console.log("I is " ,i);
    i++
}
while(i<=5)


//continue 

// let arr =[1,2,3,4,5,6]

// for(let i=0; i< arr.length; i++){

//     if(arr[i] % 3 == 0){
        
//     }
//     console.log(arr[i]);

// }

let arr = [1,2,3,4,5];

for(let i = 0; i < arr.length; i++) {
    if(arr[i] % 3  != 0) {
        // if the number is divisble by 3
        continue; // continuing as we donot want to print
    }
    console.log(arr[i]**2);
}