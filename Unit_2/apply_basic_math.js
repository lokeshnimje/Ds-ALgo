function runProgram(input){
    // Write code here
    input = input.trim().split('\n')
    let n = +input.shift()
    let arr= input[0].trim().split(' ').map(Number)

    // let sum = arr.reduce(function(a, c){
    //     return a+c
    // }, 0)
    let sum = 0
    for(let i=0; i<n;i++){
        sum += arr[i]
    }
    let index = -1
    let min = Infinity

    for (let i=0; i<n; i++){
        let temp = sum - arr[i]
        if(temp % 7 === 0){
            if(min > arr[i]){
                min = arr[i]
                index = i
            }
        }
    }
    console.log(index)
}

if(process.env.USERNAME === "hp"){
    runProgram(`5
    14 7 8 2 4`)
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