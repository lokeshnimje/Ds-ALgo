function runProgram(input){
    // Write code here
    input = input.trim().split('\n')
    let arr = []
    for(let i=0; i<input.length; i++){
        let elem = input[i].trim()
        // console.log(elem)
        arr.push(elem)
    }
    let len = arr.length
    // console.log(arr, len)
    let stack = []

    function revstack(arr,len){
        if(len==1){
            stack.push(arr[0])
            if(stack[stack.length-1] == "-1"){
                stack.pop()
            }
            return stack
        } else {
            stack.push(arr[len-1])
            if(stack[stack.length-1] == "-1"){
                stack.pop()
            }
            return revstack(arr,len-1)
        }
    }
    let str = revstack(arr, len)
    console.log(str.join('\n'))
}

if(process.env.USERNAME === "hp"){
    runProgram(`1
    2
    3
    4
    -1`)
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