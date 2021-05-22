function runProgram(input){
    // Write code here
    input = input.trim().split('\n')
    let test = +input.shift()
    let arr = input[0].trim().split(' ').map(Number)
    // console.log(arr)
    let sum=0
    for(let i=0; i<test;i++){
        sum += arr[i]
    }
    let avg = Math.ceil(sum/test)
    console.log(avg)
    
}
if(process.env.USERNAME === "hp"){
    runProgram(`4
    2 5 0 9`)
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