function person(name){
    //var name;
    this.name=name;
    console.log(this);
    
    setTimeout(function(){
    //this-->this refer to window object not person object
    console.log(this);
    
    },1000)
    //Arrow function this-->this refer tooo person object
    setTimeout(()=>console.log(this),1000);
}


var p=new person("geethika");