// Adding Behaviour to Objects ---> constructor
// here each object create getprice variable to save it the memorey,but it's going to create weste of memorey space.
function vehicle(NW,price){
  this.NW=NW,
  this.price=price
 /* this.getprice=function(){
      return this.price;
  }*/
}
// when run javascript source code, the js search engine going to create function obj and prototype obj
vehicle.prototype.getprice=function(){
    return this.getprice;
}
//vehicle1.prototype.getprice
var vehicle1=new vehicle(4,1000);
console.log(vehicle1);
var vehicle2=new vehicle(6,100000);
console.log(vehicle2);

// to overcome this problem to used prototype
// actual it's revers function logic vehicle1.prototype.constructor
// when run to javascript source code it will save it two. one EX function , other one is prototype.
//__prototype__==prototype  is true
//we can test it  which function has own property. keyword: using hasOwnProperty  