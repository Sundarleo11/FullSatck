/* js method
var a=document.getElementById('para1');
a.innerText=("No change");
*/

// JQ method 1
//# id
// .class
$('p').html('welcome');
//method 1
//$('#para2').html('good')

//method 2
var paras=$('p');
var p1=paras.eq(0);
p1.html('hey');

$('p').css('color','red');
$('#para2').css('fontSize', '20px');

$('#div').css({
    width:"100px",
    height:"100px",
    backgroundColor:"blue"
})

$('div1').click(function(){

    alert("wearning msg");
    
})


$('#para3').on('click',function(event){
     event.preventDefault();
    alert("wearning msg");
    
})


$('div').on('click',function(){
    var ele=$(this);
    ele.width(ele.width()+10+"px");
   // alert("wearning msg");
})