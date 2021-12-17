

var sec=10;
function sayhello(){
    console.log("after",sec);
    sec--;
    if(sec==0){
        //stop
        console.log("Time Up!!")
        clearInterval(id);
    }
}


var id=setInterval(sayhello,2000);