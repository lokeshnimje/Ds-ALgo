function runProgram(input){
input = Number(input)

if (input % 4 == 0){
    console.log("Yes") 
} else {
    console.log("No")
}  
}

if(process.env.USERNAME === "LOKESH"){
    runProgram(`12`)
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
