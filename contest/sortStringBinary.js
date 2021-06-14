function runProgram(input){
    // Write code here
    input = input.trim().split("\n")
    let arr = input[1].trim().split('')
    let count = 0
    let i = 0
    let j = arr.length-1
    while(i < j){
        if(arr[i] === "1" && arr[j] === "0"){
            [arr[i], arr[j]] = [arr[j], arr[i]]
            count++
            i++
            j--
        }
        if(arr[j] == "1"){
            j--
        } else if(arr[i] == "0"){
            i++
        }
    }
    console.log(count)
}

if(process.env.USERNAME === "hp"){
    runProgram(`4
    1100
    `)
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