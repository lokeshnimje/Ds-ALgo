function runProgram(input){
    // Write code here
    input = +input.trim()
    // console.log(input)
  
    function factorial(n){
        if(n==1){
            return 1;
        } else {
            return factorial(n-1) * n 
        }
    }
    //    console.log(factorial(input))
    let res = factorial(input)
    let ans = Math.log(res)
    console.log(ans.toFixed(4))
}

if(process.env.USERNAME === "hp"){
    runProgram(`3`)
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