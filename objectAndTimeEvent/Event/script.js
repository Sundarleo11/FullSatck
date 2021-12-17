
var sec=1
function sayhello(){
    console.log("after",sec);
    sec++;
    if(sec==6){
        //stop
        clearInterval(id);
    }
}

//setTimeout(sayhello,5000);// sayhello is function not a function call
//if you want run one pic code start and stop.--settimeout

var id=setInterval(sayhello,2000)// 2000 is ms--->setinterval return reference variable
//if you want run one pic code start dealy stop.--setinterval
