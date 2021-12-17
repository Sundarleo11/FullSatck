/* the way of accessing DOM

document.getElementById('one');
<h1 id=​"one">​ Heading​</h1>​
var a=document.getElementById('one');
undefined
a
<h1 id=​"one">​ Heading​</h1>​
a.style.backgroundColor="cyan";
'cyan'
a.style.color="red"
'red'
var b=document.getElementById('two');
undefined
b
<h1 id=​"two">​ Heading​</h1>​
var tag=document.getElementsByTagName('h1');
undefined
tag
HTMLCollection(2) [h1#one, h1#two, one: h1#one, two: h1#two]
tag[1].innerText="second heading";
'second heading'
var  para=document.getElementsByClassName('para');
undefined
para
HTMLCollection [p.para]
para[0].style.color="gray";
'gray'
var heading2=document.querySelector('#two');
undefined
heading2.style.background="blue";
'blue'
var para1=document.querySelector('.para');
undefined
para1.style.backgroundColor="pink";
'pink

*/