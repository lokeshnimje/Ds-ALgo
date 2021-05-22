function runProgram(input){
    // Write code here
    let time = Number(input)

    let hours = Math.floor(time/60);
    let minutes = (time % 60);
    if(hours == 1){
        console.log(hours +"hr" +" "+ minutes + "mins")
    } else {
        console.log(hours +"hrs" +" "+ minutes + "mins")      
    }
}

if(process.env.USERNAME === "hp"){
    runProgram(`135`)
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