function runProgram(input){
    // // Write code here
    input = input.trim().split('\n')
    let n = +input.shift() 
    let arr = input[0].trim().split(' ').map(Number).sort()
    // console.log(arr)
    let count = 0
    for(let i=0; i<arr.length; i++){
        // if(isPrime(arr[i])){
            if(arr[i] === 2 || arr[i] === 3){
                count++
            }
        // }
    }
    console.log(count)
    // function isPrime(num){
    //     let count = 0
    //     for(let j=2; j<=num; j++){
    //         if(num % j === 0){
    //             count++
    //         }
    //     } 
    //     return count === 1 
    // }
}

if(process.env.USERNAME === "hp"){
    runProgram(`8
2 3 1 1 3 2 5 6`)
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