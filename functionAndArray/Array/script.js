var arr=[2,3,4,5];
console.log(arr);
var arr1=new Array(1,2,3,4,5);
console.log(arr1);
console.log(arr1.length);


var color=["red","blue","yellow"];

console.log(color);
console.log(color.toString);
/*
color.shift("man");
console.log(color);
color.unshift("front delete");
console.log(color);
color.pop("yellow");
console.log(color);
color.push("gray");
console.log(color);

color.slice(1,0,"demo");
console.log(color); // starting index, delete count, insert to element
*/

var arr2=[1,2,3,4,5];

for(let i=0;i<=arr.length;i++){
    console.log(arr2[i]);
}

//each loop
function print(element){
    console.log(element);
}
arr2.forEach(print);// no need pass argu