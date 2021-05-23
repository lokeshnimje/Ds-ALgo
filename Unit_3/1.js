function runProgram(input){
    // Write code here
    input = input.trim().split('\n')
    let test = +input[0].trim()
    for(let i=0, j=1; i<test; i++){
        let n = +input[j++].trim()
        let arr = input[j++].trim().split(' ').map(Number)
        // console.log(arr, n)
        let stackL = []
        let indexL = []
        let left = []
    
        for(let i=0; i<n; i++){
            while(stackL.length !== 0){
                if(arr[i] >= stackL[stackL.length-1]){
                    stackL.pop()
                    indexL.pop()
                } else if(arr[i] < stackL[stackL.length-1]){
                    left.push(indexL[indexL.length-1])
                    stackL.push(arr[i])
                    indexL.push(i)
                    break
                }
            }
            if(stackL.length == 0){
                stackL.push(arr[i])
                indexL.push(i)
                left.push(-1)
            }
        
        }
        // console.log("left:  " +left)

        let stackR = []
        let indexR = []
        let right = []

        for(let j=n-1; j>=0; j--){
            while(stackR.length !== 0){
                if(arr[j] >= stackR[stackR.length-1]){
                    stackR.pop()
                    indexR.pop()
                } else if(arr[j] < stackR[stackR.length-1]){
                    right.push(indexR[indexR.length-1])
                    stackR.push(arr[j])
                    indexR.push(j)
                    break
                }
            }
            if(stackR.length == 0){
                stackR.push(arr[j])
                indexR.push(j)
                right.push(-1)
            }
        }
        right = right.reverse()
        // console.log("right:  " +right.reverse())
        let output = []
        for(let k=0; k<n; k++){

            if(left[k] === -1 && right[k] == -1){
                output.push(left[k])
            }  
            else if(left[k] > -1 && right[k] > -1){
                if (left[k] > right[k]){
                    output.push(right[k])
                } else {
                    output.push(left[k])
                }
            } 
            else if (left[k] > -1 || right[k] > -1){
                if (left[k] > right[k]){
                    output.push(left[k])
                } else {
                    output.push(right[k])
                }
            }
            else if(left[k] == right[k]){
                output.push(left[k])
            }       
        }
        // console.log("output:  " +output)
        res = ""
        for(let m=0; m<n; m++){
            if(output[m] >= 0){
                res += arr[output[m]] + " "
            } else {
                res += output[m] + " "
            }
        }
        console.log(res.trim())
    }
}

if(process.env.USERNAME === "hp"){
    runProgram(`4
    5
    3 2 1 3 1
    6
    3 1 8 9 10 2
    2
    2 9
    6
    6 7 9 5 5 4 `)
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