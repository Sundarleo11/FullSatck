
// how was excution start working --->flow is stack

var scope="global";

function c(){
    
    console.log("inside c");
}

function b(){
    c();
    console.log("inside b");
}

function a(){
    b();
    console.log("inside a");
}

a();
console.log(scope);


//--------------------------------------------------------------------------------------

// local vs global scope 
// it is depend extecution start context


var name="global";
//global---> ennv is "this"
function scopedemo(){

   var name="function";
   // ennv is "this"scope and outer ennv
    console.log(name);

}

scopedemo();
console.log(name);

//-------------------------------------------------------------------------------------

// funtion within function
var name1="global";

function outer(){
    var name1="outer";
    function inner(){
        var name1="inner";
        console.log(name1);
    }
    inner();
    console.log(name1);
}

outer();
console.log(name1);
