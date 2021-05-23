function runProgram(input){
    // Write code here
    input = input.trim().split('\n')
    let n = +input.shift()
    let arr = input[0].trim().split(' ').map(Number)
    // console.log(arr)
    let stack = []
    let str = ""

    for(let i=0; i<n; i++){
        while(stack.length !== 0){
            if(arr[i] <= stack[stack.length-1]){
                stack.pop()
            } else if(arr[i] > stack[stack.length-1]){
                str = str + stack[stack.length-1] + " "
                stack.push(arr[i])
                break
            }
        }
        if(stack.length == 0){
            stack.push(arr[i])
            str = str + "-1" + " "
        }
    }
    console.log(str.trim())
    // console.log((/[a-zA-Z0-9]/).test("a"))
}

if(process.env.USERNAME === "hp"){
    runProgram(`8
    39 27 11 4 24 32 32 1`)
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