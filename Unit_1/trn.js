function runProgram(input){
    var side = Number(input)

    if(side % 3 === 0){
        console.log("Yes")
    } else {
        console.log("No")
    }
       
}

if(process.env.USERNAME === "LOKESH"){
    runProgram('6')
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