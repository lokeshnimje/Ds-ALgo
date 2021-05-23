function runProgram(input) {
    input = input.trim().split("\n")
    let test= +input[0]

    for(let i=0, j=1; i<test; i++){
        let dim = +input[j++].trim()
        let arr = input[j++].trim().split(" ").map(Number)
        // console.log(arr)
        let stack = []
        let index = []
        let res = []
        for(let i=0; i<dim; i++){
            while(stack.length > 0 && stack[stack.length-1] <= arr[i]){
                stack.pop()
                index.pop()
            }

            stack.push(arr[i])

            if(index.length === 0){
                res.push(i+1)
            } else {
                res.push(i-index[index.length-1])
            }
            index.push(i)
        }
        // console.log(stack)
        // console.log(index)
        console.log(res.join(' '))
    }
    
    
 }

 if(process.env.USERNAME === "hp"){
    runProgram(`2
    7
    100 80 60 70 60 75 85
    5
    3 5 0 9 8`)
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
