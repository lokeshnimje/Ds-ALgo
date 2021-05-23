function runProgram(input){
    // Write code here
    input = input.trim().split('\n')
    let test = +input.shift()
    let stack = []
    let len = stack.length
    for(let i=0; i<test; i++){
        let arr = input[i].trim().split(' ')
        // console.log(arr[0])
        if(arr[0] == 1){
            if(stack.length == 0){
                console.log("No Food")
            } else {
                console.log(stack[stack.length-1])
                stack.pop()
            }
        } else if (arr[0] == 2){
            stack.push(arr[1])
        }
    }
}

if(process.env.USERNAME === "hp"){
    runProgram(`6
    1
    2 5
    2 7
    2 9
    1
    1`)
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