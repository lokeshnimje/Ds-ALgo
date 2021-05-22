function runProgram(input){
    // Write code here
    input = input.trim().split('\n')
    let test = +input.shift()
    for(let k=0; k<test; k++){
        console.log(input[k].trim().split('').reverse().join(''))
    }
}
if(process.env.USERNAME === "hp"){
    runProgram(`3
    ab
    cd
    ef`)
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