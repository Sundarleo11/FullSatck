//strict mode 

'use strict';
// step 1
function demo(a,b){
    console.log(this);
    console.log(a,b);
}

//step 2
var demo1=function()
{
    console.log(this);
}
//step 3
console.log(this);

//step 1 to 3 to refe in window object 

// here refering outer variable (refer :function cotext, global context top)
var obj={
'print':12,
 'printf':function(){
     console.log(this);
 }
}
// you can pass argu as well
demo(); //undefined
demo.call(obj);
demo.call(obj,3,4);
demo.apply(obj,[4,5]);
/*
demo();
demo1();
obj.printf();
*/