function runProgram(input){
    // Write code here
    input = input.trim().split('\n')
    let n = +input.shift()
    let arr = input[0].trim().split(' ').map(Number)

    let flag = false
    let i = 0;
    for(let j=0; j<n; j++){
        if(((arr[i] - 1) === 0) && ((arr[i+1] - 1) === 0)){
            flag = true
            // break
        } else {
            flag = false
        }
        arr[i] = arr[i] - 1;
        arr[i+1] = arr[i+1] - 1;
        // console.log( arr[i], arr[i+1])
    
    }
    if (flag){
        console.log("YES")
    } else {
        console.log("NO")
    }
}

if(process.env.USERNAME === "hp"){
    runProgram(`2
    1 2`)
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