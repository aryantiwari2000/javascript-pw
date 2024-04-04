const d=Date();

console.log(d , typeof(d))

const dt = new Date()

console.log(dt.getDate());
console.log(dt.getMonth());
console.log(dt.getFullYear());
console.log(dt.getMinutes());
console.log(dt.getSeconds());
console.log(dt.getTime());



 
function ts()
{
  var date = new Date();
  return date.getTime();
}
ts();

console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);

const x=13;

console.log(x.toString(2));// converts the number to a binary

console.log(x.toString(8));// converts the number to a octal


// if you call toString without an argument, then it just converts the number to string
console.log(x.toString());

console.log(parseInt("1101", 2));

console.log(typeof(NaN));

const num = 10.345178;
console.log(num.toPrecision(5));//num of significant digits to print
console.log(num.toFixed(2));


const zero = 0;
const pos_zero = +0;
const neg_zero = -0;

console.log(zero, pos_zero, neg_zero);
console.log(neg_zero == zero);
console.log(neg_zero === zero);



const y = 556565654654654646546546546554165222222222222222222222222222222222222222222222266666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666664111111111111111111111163146541654565656558556n;
console.log(y);
const a =BigInt("45867898678986789458678986789867894586789867898678945867898678986789458678986789867894586789867898678945867898678986789458678986789867894586789867898678945867898678986789458678986789867894586789867898678945867898678986789");
console.log(a);


