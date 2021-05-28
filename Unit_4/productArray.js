function runProgram(input){
    // Write code here
    input = input.trim().split('\n')
    let n = +input[0].trim()
    let arr = input[1].trim().split(' ').map(Number)
    // console.log(arr)
    function product(n, arr){
        if(n==0){
            return 1;
        } else {
            return arr[n-1] * product(n-1, arr)
        }
    }
    console.log(product(n, arr))
}

if(process.env.USERNAME === "hp"){
    runProgram(`5
    3 5 2 9 4`)
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