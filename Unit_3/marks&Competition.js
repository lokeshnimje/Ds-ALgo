function runProgram(input){
    // Write code here
    input = input.trim().split('\n')
    let n = +input.shift()
    let arr = input[0].trim().split(' ').map(Number)
//    console.log(arr)
    let res = ""
    for(let i=0; i<n-1; i++){
        let flag = true
        for(let j=i+1; j<n; j++){
            // console.log(i + " " + j)
            if(arr[i] < arr[j]){
                flag = false
                break
            }
        }
        if(flag){
            res += arr[i]+ ' '
        }
    }
    console.log(res+ arr[arr.length-1])
}

if(process.env.USERNAME === "hp"){
    runProgram(`6
    16 17 4 3 5 2`)
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