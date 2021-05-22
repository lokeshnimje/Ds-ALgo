function runProgram(input){
    // Write code here
    let arr = input.trim()
    let count = 0
    for(let i=0; i<arr.length; i++){
        for(let j=i; j<arr.length; j++){
            if(arr[i] === arr[j]){
                count++
            }
        }
    }
    console.log(count)
}

if(process.env.USERNAME === "hp"){
    runProgram(`abcab`)
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