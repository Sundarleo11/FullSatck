
//"use strict"


var box=document.getElementById('box');

var click=document.getElementById('click-count');
 count=0;
box.addEventListener('click',function(){
    count++;
    console.log("box count");
    click.innerText=count+" ";
   
})