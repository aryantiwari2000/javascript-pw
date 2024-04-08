// const arr=[1,2,3,4,5]

// const result=arr.map((element)=>{
//  console.log("Element is",element);
// //  return element*element
// })
// console.log(result);
// console.log(arr);


// const products = [{id: 1, name: 'iphone', price: 1000}, {id: 2, name: 'macbook', price: 2000}, {id: 3, name: 'airpods', price: 200}];

// const modifiedProducts=products.map((product ,idx)=>{
//  console.log(idx);

//  return {productName:product.name , productId:product.id}
// })
// console.log(modifiedProducts);


// const arr = [1,2,3,4,5,6,7];

// const oddelements = arr.map((element)=>{
    
//     // const xyz= element+2;
//     return element % 2 != 0;
// })
// console.log(oddelements);

// const newArray = arr.map((element) => {
// if(element % 2 != 0) 
// return element;    
// })
// console.log(newArray)

// const products = [{id: 1, name: 'iphone', price: 1000}, {id: 2, name: 'macbook', price: 2000}, {id: 3, name: 'airpods', price: 200}];

// const modifiedProducts = products.filter((product, idx) => {
//     console.log(idx)
//     return product.price <= 1000;
// });
// console.log(modifiedProducts)

// const shoppingCart = [
//     { product: 'Shoes', price: 80, quantity: 1 },
//     { product: 'Bag', price: 120, quantity: 2 },
//     { product: 'Watch', price: 250, quantity: 4 }
// ];
// const result = shoppingCart.reduce(function reducer(accumulator, currentValue) {
//     console.log(accumulator, currentValue);
//     return 10
// } ,0);

// console.log(result);

function factorial(){

    return [1,2,3,4,5].reduce((acc,val)=>{
        return acc * val 
    },1)
}
console.log(factorial());