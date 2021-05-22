// Hassan has discovered his own sorting algorithm. The algorithm has following conditions:

// 1. Given an integer k,  sort the values in the array according to their modulo with k. That is, if there are two integers a and b, and a%k < b%k, then a would come before b in the sorted array.

// 2. If a%k = b%k, then the integer which comes first in the given array remains first in the sorted array.

// Your task is to write a program that sorts the given array as per above mentioned condition and print the sorted array.



function runProgram(input){
    // Write code here
     input = input.trim().split('\n')
     let [n,k] = input[0].trim().split(' ').map(Number)
     
     let arr = input[1].trim().split(' ').map(Number)
    //  console.log(n,k, arr)
    
        let len = arr.length;

        for (let i = 0; i < len; i++) {
            for (let j = 0; j < len-i-1; j++) {
                if ((arr[j] % k) > (arr[j + 1] % k)) {
                    [arr[j], arr[j+1]] = [arr[j+1], arr[j]]     //swaping
                }
            }
        }
        console.log(arr.join(' '))
}
    
if(process.env.USERNAME === "hp"){
    runProgram(`5 6
    12 18 17 65 46`)
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