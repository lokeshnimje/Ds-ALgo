function runProgram(input){
    // Write code here
    input = input.trim().split('\n')
    let query = +input.shift()
    let stack = []
    let s = 0
    for(let i=0; i<query; i++){
        let arr = input[i].trim().split(' ').map(Number)
        if(arr[0] == 1){
            stack.push(arr[1])
        } else if(arr[0] == 2){
            if(stack.length !==0){
                s -= stack[stack.length-1]
                stack.pop()
            } else {
                s += 1
            }
        }
    }
    console.log(Math.abs(s))

 
}

if(process.env.USERNAME === "hp"){
    runProgram(`3
    1 2
    2
    2`)
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