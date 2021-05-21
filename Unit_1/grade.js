function runProgram(input){
    // Write code here
     input =  Number(input)
     if (input === 100){
         console.log("A")
     } else if(input >= 90){
         console.log("B")
     } else if (input >= 80){
         console.log("C")
     }else {
         console.log("F")
     }   
}

if(process.env.USERNAME === "LOKESH"){
    runProgram('80')
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