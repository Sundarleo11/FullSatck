//Avoid the global function.Reason :some time function overriden last variable depending.
/*
var name="Parker";
console.log(name);


setTimeout(function(){
    console.log(name);
},1000)*/
/*
function print(){
    var name="Parker";



setTimeout(function(){
    console.log(name);
},1000)
}

print();*/


//IIFE--immediate invoke the fun expr
(function(){
    var name="Parker";



    setTimeout(function(){
        console.log(name);
    },1000)
})();