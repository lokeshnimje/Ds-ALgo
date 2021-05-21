// You are provided an integer N, print "Yes" (without quotes) if the given integer is prime, else print "No" (without quotes).

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

if(process.env.USERNAME === "LOKESH"){
    runProgram(`13`)
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
