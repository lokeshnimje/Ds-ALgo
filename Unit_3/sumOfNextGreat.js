function runProgram(input){
    // Write code here
    input = input.trim().split('\n')
    let test = +input[0].trim()
    for(let i=0, j=1; i<test; i++){
        let dim = +input[j++].trim()
        let arr = input[j++].trim().split(' ').map(Number)
        // console.log(arr)
        let stack = []
        let res = []
        let sum = 0
        for(let i=dim-1; i>=0; i--){
            while(stack.length > 0){
                if(arr[i] < stack[stack.length-1]){
                    res.push(stack[stack.length-1])
                    if(res[res.length-1] % 2 == 0){
                        sum += arr[i]
                        // console.log(sum)
                    }
                    stack.push(arr[i])
                    break
                } 
                else if(arr[i] >= stack[stack.length-1]){
                    stack.pop()
                }
            }
            // console.log(arr[i],i)
            if(stack.length == 0){
                stack.push(arr[i])
                res.push(-1)
            }
        }
        // console.log(res.reverse().join(' '))    // till here we calculated next greter element
        console.log(sum)
    }
 
}

if(process.env.USERNAME === "hp"){
    runProgram(`1
    11
    2 2 2 5 3 2 8 1 4 8 10`)
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