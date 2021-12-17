//window.alert("hey");

// data type   
/* 
6 primitive data types and 1 object -
● Number-representsintegerandfloatingvalues 
● String-representstextualdata 
● Boolean-logicalentitywithvaluesas'true'and'false' 
● Undefined-representsvariablewhosevalueisnotyetassigned 
● Null-representsintentionalabsenceofvalue 
● Symbol-representsuniquevalue 
● Object-representskeyvaluepair

data type    return
  1.number------>number(64bit)
  2.string ----->string
  3.boolean----->tru or flase.
  4.undefind----->undefinded--->not yet set value
  5.null--------->null    ---->un present of value
  6.NAN----------->---->not a number

'null' is the value that represents a reference that points to a non existent object or
address. This means that there is an absence of a value. The data type for null value is "Object".

'NaN' means Not-A-Number. 
So, if any expression fails to return a number, 
then 'NaN' is printed on the console. Eg., (12 - "abc") cannot be evaluated to a number, 
so 'NaN' is printed on the console. The data type for 'NaN' is "Number".
  -----------------------
  object
*/

var a=10;
console.log(a);


console.log('number ',typeof(Number));//function or number

console.log('string ',typeof("string"));//string

console.log('boolean ',typeof('true'));//string

console.log('undefind ',typeof(undefinded));//undefinded

console.log('null ',typeof(null));//object

console.log('NAN',typeof(NAN));//number

console.log("object", typeof(object));//function or object

console.log("demo");
var a=null;
console.log(a);
typeof(a);  // o/p  is object .it is a bug not yet resolved in javascript

Math.pow(10.1000);


/*

=== vs ==

=== based on type for example 1==='1' false
== based on value for example 1!=="1" true
*/

// conditional

let c=10;

if(c>0){
    console.log('postive');
}else if(c<0){
    console.log('negative');
}else{
    console.log("zero");
}


let b=null;

if(b>0){
    console.log("true");
}else{
    console.log("false");
}