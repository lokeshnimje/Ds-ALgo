function runProgram(input){
    // Write code here
    input = input.trim().split('\n')
    let n = +input[0].trim()
    let arr = input[1].trim().split(' ').map(Number)
    // console.log(arr)

    let stack1 = []
    let index1 = []
    let res1 = []
    for(let i=0; i<n; i++){
        // console.log(arr[i])
        while(stack1.length > 0){
            if(arr[i] > stack1[stack1.length-1]){
                stack1.pop()
                index1.pop()
            }else if(arr[i] <= stack1[stack1.length-1]){
                res1.push(index1[index1.length-1])
                stack1.push(arr[i])
                index1.push(i+1)
                break
                // console.log(stack1)
            } 
        }
        if(stack1.length == 0){
            stack1.push(arr[i])
            index1.push(i+1)
            res1.push(-1)
        }
    }
    // console.log(stack1)
    // console.log(index1)
    // console.log(res1)
    
    let stack2 = []
    let index2 = []
    let res2 = []
    for(let i=n-1; i>=0; i--){
        // console.log(arr[i])
        while(stack2.length > 0){
            if(arr[i] > stack2[stack2.length-1]){
                stack2.pop()
                index2.pop()
            }else if(arr[i] <= stack2[stack2.length-1]){
                res2.push(index2[index2.length-1])
                stack2.push(arr[i])
                index2.push(i+1)
                break
                // console.log(stack1)
            } 
        }
        if(stack2.length == 0){
            stack2.push(arr[i])
            index2.push(i+1)
            res2.push(-1)
        }
    }
    // console.log(stack1)
    // console.log(index1)
    let sum = []
    for(let j=0; j<n; j++){
        sum.push((res1[j] + res2[j]))
    }
    console.log(sum.join(' '))
}

if(process.env.USERNAME === "hp"){
    runProgram(`5
    5 4 1 3 2`)
} else {
process.stdin.res1ume();
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
