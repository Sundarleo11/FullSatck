// constructor mode to make easy to write and read the source code 
//if you are using strict mode  second function ---> throw an error
//'use strict';
function createstd(name,rollNo,mark){
   // var std={};  //new Object();
     this.name=name;
     console.log(this);
     this.rollNo=rollNo;
     this.mark=mark;
   // console.log(this);// second function std looking for window object
  //  return std;
}

// it's looking constructor object
var std=new createstd('abc',12,87);

// it's looking function not a  contructor.but i comment it object and return 
var std= createstd("abc",12,87);

