//VARIABLES IN JS

let naam = "Sampath"; //initilisation
console.log(naam);

let b ;    //declaration

b = "Kalyani"; //re-assigning value to already declared variable
console.log(b);

naam="kumar"; //reassigning
console.log(naam);

// RULES

// variable can begin with capital or small letters
let Name = "sampath";
console.log(Name)

let name = "kumar" 
console.log(name);

//variable can't be start with number
// 8name="VS code"
// console.log(8name) //syntax error

// can start with $ symbol,use it middele and last of variable name
let $ampath = "SAmpath"
console.log($ampath) //sAmpath

let Samp$ath = "SAmpath"
console.log(Samp$ath) //sAmpath

let sampath$ = "SAmpath"
console.log(sampath$) //sAmpath

// can use underscore whereever in the varaible
let _name="kumar"
console.log(_name)

let first_name="python"
console.log(first_name)

let lastname_="developer"
console.log(lastname_)

//unable to use @ for variable 

// let n@me="html"
// console.log(n@me) //Uncaught SyntaxError

// let @name="css"
// console.log(@name) //Uncaught SyntaxError

//DATA-TYPES
// number , string , boolean , undefined , null , object , bigint , symbol 

//number 
let num =10;
console.log(num);  // 10
console.log(typeof(num)); // number
console.log(typeof num); //number --> can also assign type function like this

//string
let a = "java script";
console.log(a);  //java sript
console.log(typeof a); //string

a=10;
b="10";
console.log(a+b) //1010 --> string concatination with numbers with different data type is possible

console.log(a+ +b) //20  --> can add sting and number using two + symbols 

//boolean

// and --> &&
// or  --> ||
// not --> !

 a=10;
 b=20;
let c=30;

// AND (&&)
console.log((a>b) && (b>a)) //false, -->false && true = false
console.log((b>a) && (c>a)) // true, -->true && true = true

//OR (||)
console.log((a>b) || (b>a)) //true , --> false||true=true
console.log((a>b) || (a>c)) //false, -->false||false=false

//NOT (!)
console.log(!(a>b) || (b>a)) //true , --> false||true=true
console.log((a>b) && !(a>c)) //false, -->false&&false=false

//undefined

let k;
console.log(k)
console.log(typeof k)


//null

k=null;
console.log(k)
console.log(typeof k) //object , null data type is object

//---OPERATORS--

//Arithmetic 

console.log(a+b) // 30
console.log(a-b) // -10
console.log(a*b) // 200
console.log(b/a) // 2 (number)
console.log( typeof b/a) //number
console.log(a/b) // 0.5 (float)
console.log(typeof a/b)  //number
console.log(a**2) //100

// Comparitive 
 
// loose equalsto--> it compares only values 
// strict equalsto--> it comapres both values and data type

// ==    --> loose equalto
// ===   -->strict equalto
// !==   -->loose not equalto
// !===  --> strict not equalto

k =10;
let l ="10";


console.log(k==l) //true , in js even both are different data types but value is same , so it considers both has same values
console.log(k===l) //false , Same value but different data types as itis strict equals to

console.log(k!=l) //false

console.log(k!==l) //true




