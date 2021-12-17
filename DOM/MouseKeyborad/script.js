var outerDiv=document.getElementById('outer');

outer.addEventListener('mouseover',function(){
  console.log("mouse over");
});

outer.addEventListener('mouseout',function(){
    console.log("mouse out");
  });
/*
  var serchinput=document.getElementById('search');
  serchinput.addEventListener('keypress',function(){
    console.log("keypress");
  });

  */
 document.addEventListener('keydown',function(event){
     console.log('keydown',event.keyCode);
 })