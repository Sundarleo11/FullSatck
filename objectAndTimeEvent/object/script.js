//object as key value paire
object={
   // "name":"abc",
    name:"abc",   //[] can user negative key but normal key won't work.
    rollno:123,
    age:22,
    mark:98      // if you want delete object key use delete.object properties(reference)
}

//how oject are store ---> values --->in memory 

var a={
    p1:10
}

var b=a;

//iterating object

// method 1
for(let i in object){
   console.log(i,object[i]);
}

//method 2

var keys=Object.keys(object);
var keyss=Object.getOwnPropertyNames(object);


//how to create nested object 

var school={
    name:"sundar",
    rolllno:5155,
    mark:35,
    address:{
        city:"Madurai",
        pincode:625532
        /* o/p
         school.address.city
         'Madurai'
        school.address["city"]
        'Madurai'
        school.address["pincode"]
        625532*/
    }

}


// Arrays vs Object
let array=[10,20,30,40];

/*

function & o/p
0: 10
1: 20
2: 30
3: 40
length: 4
[[Prototype]]: Array(0)
at: ƒ at()
concat: ƒ concat()
constructor: ƒ Array()
copyWithin: ƒ copyWithin()
entries: ƒ entries()
every: ƒ every()
fill: ƒ fill()
filter: ƒ filter()
find: ƒ find()
findIndex: ƒ findIndex()
flat: ƒ flat()
flatMap: ƒ flatMap()
forEach: ƒ forEach()
includes: ƒ includes()
indexOf: ƒ indexOf()
join: ƒ join()
keys: ƒ keys()
lastIndexOf: ƒ lastIndexOf()
length: 0
map: ƒ map()
pop: ƒ pop()
push: ƒ push()
reduce: ƒ reduce()
reduceRight: ƒ reduceRight()
reverse: ƒ reverse()
shift: ƒ shift()
slice: ƒ slice()
some: ƒ some()
sort: ƒ sort()
splice: ƒ splice()
toLocaleString: ƒ toLocaleString()
toString: ƒ toString()
unshift: ƒ unshift()
values: ƒ values()
Symbol(Symbol.iterator): ƒ values()
Symbol(Symbol.unscopables): {copyWithin: true, entries: true, fill: true, find: true, findIndex: true, …}
[[Prototype]]: Object








*/



var object={
    "0":10,
    "1":20,
    "3":30,
    "4":40
}


/*
function & o/p
0: 10
1: 20
3: 30
4: 40
[[Prototype]]: Object
constructor: ƒ Object()
hasOwnProperty: ƒ hasOwnProperty()
isPrototypeOf: ƒ isPrototypeOf()
propertyIsEnumerable: ƒ propertyIsEnumerable()
toLocaleString: ƒ toLocaleString()
toString: ƒ toString()
valueOf: ƒ valueOf()
__defineGetter__: ƒ __defineGetter__()
__defineSetter__: ƒ __defineSetter__()
__lookupGetter__: ƒ __lookupGetter__()
__lookupSetter__: ƒ __lookupSetter__()
__proto__: (...)
get __proto__: ƒ __proto__()
set __proto__: ƒ __proto__()


*/


//array and object both are dynamic memory binding
// if added any item in the array length won't change, but if we added key of array it will change total=arrsize+1;




