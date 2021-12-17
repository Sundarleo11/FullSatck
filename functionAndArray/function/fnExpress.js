// function expression 

//---- nameed function
  var factorial = function fact(n){
  let ans=1;
   for( let i=1; i<=n ; i++){
       ans*=i;
   }
   console.log(ans);
   //return ans;
 }

 // anonymous function means no name 
 
 var factorial1 =  function (n){
    let ans=1;
    for( let i=1; i<=n ; i++){
        ans*=i;
    }
    console.log(ans);
    
  }

//arrow function
  factorial2 = (n)=>{
    let ans=1;
     for( let i=1; i<=n ; i++){ 
         ans*=i;
     }
     console.log(ans);
     
   }


 factorial1(6);
 factorial(5);
 factorial2(4);


 // to check function express

console.log(factorial1);
console.log(factorial);

// different between function declaration vs fuction expression ---->hoisting


console.log(fact(4));
//console.log(factorial12(4));
console.log(factorial12); // holding the value

var factorial12 = function fact(n){
    let ans=1;
     for( let i=1; i<=n ; i++){
         ans*=i;
     }
     console.log(ans);
     //return ans;
   }

function fact(n){
    let ans=1;
     for( let i=1; i<=n ; i++){
         ans*=i;
     }
     console.log(ans);
     //return ans;
   }
