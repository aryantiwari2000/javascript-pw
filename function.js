function calculateSquare (num){

let squareValue=num*num;

console.log(squareValue)

}
calculateSquare(9)



function calculateSquare (num){

    let squareValue=num*num;
    
    return squareValue    
    }
const result=calculateSquare(9)
console.log(result);


function addNumber(){
    let result=0;
    for(let i=0; i<arguments.length; i++)
    result+=arguments[i]
    return result
}

console.log(addNumber(2,3,5))
console.log(addNumber(2,3,))
console.log(addNumber(2,3,7,8))


function addNumber(a,b,c){

    return a+b+c
}
console.log(addNumber(2,4,5))