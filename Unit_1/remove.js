// Given, an array A (index starting from 0) with N elements. 
// You CAN remove only that element which makes the sum of ALL the remaining elements
// exactly divisible by 7,
// Your task is to find the first array index of the smallest element 
// that can be removed.

function runProgram(input){
    // Write code here
    input = input.trim().split('\n')
    var num = Number(input[0])
    var arr = input[1].trim().split(' ').map(Number)
    // console.log(arr)
    let sum = arr.reduce(function(a, c){
        return a+c
    }, 0)
    let index = -1
    let min = Infinity

    for (let i=0; i<num; i++){
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

if(process.env.USERNAME === "LOKESH"){
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