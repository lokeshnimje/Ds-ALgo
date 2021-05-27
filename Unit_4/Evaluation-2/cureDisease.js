function runProgram(input){
    // Write code here
    input = input.trim().split('\n')
    let n = +input.shift()
    // console.log(n)
    let vaccine = input[0].trim().split(' ').map(Number)
    let midichlorians = input[1].trim().split(' ').map(Number)
    // console.log(vaccine[0], midichlorians[0])
    let count = 0
    for(let i=0; i<n; i++){
        if(vaccine[i] < midichlorians[i]){
            count++ 
        } 
    }
    console.log(count > 0 ? "No" : "Yes")
}

if(process.env.USERNAME === "hp"){
    runProgram(`5
    123 146 454 542 456
    100 328 248 689 200`)
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