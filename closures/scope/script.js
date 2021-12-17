var a=10;
 function outer(){
     var b=20;
     console.log(b);
 }

console.log(a);
console.log(window.a);
outer();
window.outer();