function runProgram(input){
    // Write code here
    input = input.trim().split('\n')
    let test = +input[0].trim()
    let queue = []
    let stack = []
    for(let i=0, j=1; i<test; i++){
        let arr = input[j++].trim().split(' ')
        let res = []
        if(arr[0] == 1){
            queue.push(arr[1])
        } else if (arr[0] == 2){
            stack.push(arr[1])
        } else if (arr[0] == 3){
            if(queue.length == 0){
                console.log("-1")
            } else {
                console.log(queue[0])
            }
        } else if (arr[0] == 4){
            if(stack.length == 0){
                console.log("-1")
            } else {
                console.log(stack[stack.length-1])
            }
        } else if (arr[0] == 5){
            let front = queue[0]
            stack.push(front)
            queue.shift()
        }
    }
  
}

if(process.env.USERNAME === "hp"){
    runProgram(`7
    1 4
    2 3
    1 2
    3
    4
    5
    4`)
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