function runProgram(input){
    // Write code here
    input = input.trim().split('\n')
    let test = +input[0].trim()
    for(let i=0, j=1; i<test; i++){
        let n = +input[j++].trim()
        // console.log(n)
        console.log(noOfWays(n))
    }
    function noOfWays(n){
        if(n < 0){
            return 0
        } else if (n == 0){
            return 1
        }
        return noOfWays(n-1) + noOfWays(n-2) + noOfWays(n-5)
    }
  
}

if(process.env.USERNAME === "hp"){
    runProgram(`1
    4`)
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