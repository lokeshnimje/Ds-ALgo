function runProgram(input){
    // Write code here
    input = input.trim().split('\n')
    let [n,r] = input[0].trim().split(' ').map(Number)
    // console.log(n,r)
    let sum = 0
    function gp(n,r){
        sum += (1/r**n)
        if(n==0){
            return sum
        }
        return gp(n-1, r)
    }
    let res = gp(n,r).toFixed(4)

    console.log(res)
}

if(process.env.USERNAME === "hp"){
    runProgram(`3 5`)
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