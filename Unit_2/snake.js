function runProgram(input){
    // Write code here
    let [row, col] = input.trim().split(' ').map(Number)
    console.log(row, col)

    for(let i=0; i<row; i++){
        console.log( i % 2 == 0 ? "#".repeat(col) : ( (i+1) % 4 == 0 ? "#" + ".".repeat(col-1) : ".".repeat(col-1) + "#") )
        // if(i % 2 == 0){
        //     console.log("#".repeat(col))
        // } else if((i+1) % 4 === 0){
        //     console.log("#" + ".".repeat(col-1))
        // } else {
        //     console.log(".".repeat(col-1) + "#")
        // }
    }
}

if(process.env.USERNAME === "hp"){
    runProgram(`9 9`)
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