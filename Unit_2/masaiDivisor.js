function runProgram(input){
    // Write code here
  let [left, right, k] = input.trim().split(' ').map(Number)
//   console.log(left, right, k)
  let count = 0
    for(let i=left; i<=right; i++){
        if (i % k === 0) {
            count++
        }
    }
    console.log(count)
}

if(process.env.USERNAME === "hp"){
    runProgram(`1 10 1`)
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