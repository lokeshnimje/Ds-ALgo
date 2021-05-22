function runProgram(input){
    // Write code here
    let arr = input.trim().split('')
    // console.log(arr)
    let res = ""
    for(let i=0; i<arr.length;i=i+2){
        res += (arr[i].repeat (Number(arr[i+1])))
    }
    console.log(res)
}

if(process.env.USERNAME === "hp"){
    runProgram(`a3b2`)
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