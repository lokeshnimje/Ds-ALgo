function runProgram(input){
    // Write code here
    input = Number(input)
    var count = 0
    for (var i=2; i<=input; i++){
        if (input % i === 0){
            count++
        }
    }       
    console.log(count === 1 ? "YES" : "NO")
}

if(process.env.USERNAME === "hp"){
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