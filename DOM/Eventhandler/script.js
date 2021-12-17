var btn=document.getElementById('btn2');
/*
btn.addEventListener('click',function(){
 alert("demo");
});*/

btn.addEventListener('click',sayhello);
btn.addEventListener('click',bay);
//{ alert("sayhello");});

function sayhello(){
    alert("sayhello");
}

function bay(){
    alert("byee");
}