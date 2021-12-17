var std1={
    name:'abc',
    rollNo:34,
    mark:68
}


var std2={
    name:'abc',
    rollNo:38,
    mark:98
}

console.log(std1);
console.log(std2);


// to over come this problem

function createstd(name,rollNo,mark){
    var std={};  //new
    std.name=name;
    std.rollNo=rollNo;
    std.mark=mark;
    return std;
}

var std3=createstd('asd',56,87);
console.log(std3);
var std=createstd("sdf",56,87);//--read from chrome std()

