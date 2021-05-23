function runProgram(input){
    // Write code here
    input = input.trim().split('\n')
    let test = +input[0].trim()

    for(let i=0, j=1; i<test; i++){
        let stack = []
        let n = +input[j++].trim()
        let arr = input[j++].trim().split(' ').map(Number)
        // console.log(arr)
        for(let k=0; k<n; k++){
            let max = 0
            let flag = true
            for(let l=k+1; l<n; l++){
                let num = 0
                if(arr[k] < arr[l]){
                    num += arr[l]
                    if(num > max){
                        max = num
                        flag = false
                    }
                }
            }
            if(flag){
                stack.push(-1)
            }else {
                stack.push(max)
            }
        }
        console.log(stack.join(' '))
    }
 
}

if(process.env.USERNAME === "hp"){
    runProgram(`1
    5
    2 3 5 5 5`)
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