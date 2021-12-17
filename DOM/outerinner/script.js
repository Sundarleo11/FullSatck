var inner=document.getElementById('inner');
inner.addEventListener('click',function(event){
 console.log("inner div");
 event.stopPropagation();
});

var outer=document.getElementById('outer');
outer.addEventListener('click',function(event){
 console.log("outer div");
 event.stopPropagation();
});


addEventListener('click',function(){
    console.log("document");});