/*
 excultion env
 |        |
 |        |
 |        |      
 |outer  |-----> exc--->env-->  this outer context and refer global
 |        |
 | ------|     
 |global
 |  context|   exc--->env-->this global context "this is called lexical"
 |________|        

*/



var a=100,b;
 function outer(){
     var b=20;
     console.log(a,b);

     function inner(){
         var a=200, b=400;
         console.log(a,b);
     }
     inner();
 }
console.log(a,b);
window.outer();
console.log(a,b);