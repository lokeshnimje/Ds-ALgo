function runProgram(input){
    // Write code here
    input = input.trim().split('\n') 
    var a = input[0].trim().split(' ');
    var b = input[1].trim().split(' ');

    for(var i = 0; i < a.length; i++){
    a[i] = Number(a[i])
    b[i] = Number(b[i])
    }    
    if (a[0] > b[0]){
        console.log("New Zealand")
    }
    else if (b[0] > a[0]){
        console.log("England")
    }
    else {
        if (a[1] > b[1]){
            console.log("New Zealand")
        }
        else if (b[1] > a[1]){
            console.log("England")
        }
        else if (a[2] > b[2]){
            console.log("New Zealand")
        }
        else if(b[2] > a[2]){
            console.log("England")
        }
    }

 }

if(process.env.USERNAME === "LOKESH"){
    runProgram(`241 15 21
    241 15 260`)
} else {
process.stdin.resume();
process.stdin.setEncoding("ascii");
let read = "";
process.stdin.on("data", function (input) {
    read += input;
});
process.stdin.on("end", function () {
    read = read.replace(/\n$/,"")
   runProgram(read);
});

process.on("SIGINT", function () {
    read = read.replace(/\n$/,"")
    runProgram(read);
    process.exit(0);
});
}