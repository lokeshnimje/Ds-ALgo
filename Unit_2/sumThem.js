function runProgram(input){
    // Write code here
    input = input.trim().split("\n")
    let num = +input[0].trim()
    let arr = input[1].trim().split(' ').map(Number)
    // console.log(num, arr)
    let sum = 0
    for(let i=0; i<arr.length; i++){
        if(i % 2 !== 0){
            sum += arr[i]
        }
    }
    console.log(sum)
}

if(process.env.USERNAME === "hp"){
    runProgram(`5
    3 5 0 9 8`)
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