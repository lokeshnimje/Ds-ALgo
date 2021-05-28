function runProgram(input){
    // Write code here
    let arr = input.trim().split('')
    // console.log(arr[11])
    let n = 0
    let count = 0

    function findLen(arr, n){
        if(arr[n] == undefined){
            return count;
        } else {
            return 1 + findLen(arr,n+1)
        }
    }
    console.log(findLen(arr, n))
 
}

if(process.env.USERNAME === "hp"){
    runProgram(`masaischool`)
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