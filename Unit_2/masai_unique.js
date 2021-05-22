function runProgram(input){
    // Write code here
    let str = input.trim()
    // console.log(str)

    let obj ={}
    let flag = false
    for(val of str){
        // console.log(val)
        if(val in obj){
            ++obj[val]
            flag = true
            break
        } else {
            obj[val] = 1
        }
    }
    console.log(flag ? "No" : "Unique")
}

if(process.env.USERNAME === "hp"){
    runProgram(`masai`)
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