function runProgram(input){
    // Write code here
    input = input.trim().split('\n')
    let test = +input.shift()
    let stack = []
    for(let i=0; i<test; i++){
        let arr = input[i].trim().split(' ')
        if(arr[0] == 1){
            stack.push(arr[1])
        } else if (arr[0] == 2){
            stack.pop()
        } else if (arr[0] == 3){
            if(stack.length == 0){
                console.log("Empty!")
            } else {
                console.log(stack[stack.length-1])
            }
        }
    }
}

if(process.env.USERNAME === "hp"){
    runProgram(`6
    1 15
    1 20
    2
    3
    2
    3`)
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