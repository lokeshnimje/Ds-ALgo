// create a pattern.
function runProgram(input){
    // Write code here
    input = +input
    for(let i=0;i<input;i++){
        let row = ""
        let j = input-i;
        while(j !== 0){
            if(j > 1){
                row += "* "
            }
            else{
                row += "*"
            }
            j--
        }
        let k = i
        while(k !== 0){     //spaces at end of every row
            row += "  "
            k--
        }
        console.log(row)
    }
}

if(process.env.USERNAME === "hp"){
    runProgram(`5`)
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