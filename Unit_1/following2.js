// You are given N integers, your task is to write a program that
//  finds the integer present after 2 in the sequence of numbers given.
//   In case 2 is not present or  2 is the last element, print -1.


function runProgram(input){
    // Write code here
    input = input.trim().split('\n')
    let len = Number(input[0])
    let arr = input[1].trim().split(' ').map(Number)
    for(var i=0; i<arr.length; i++){
        if(arr[i] ==2  && i !== len-1){
            console.log(arr[i+1])
            return
        } 
    }
    console.log(-1)
  
}

if(process.env.USERNAME === "LOKESH"){
    runProgram(`5
3 4 2 0 1`)
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