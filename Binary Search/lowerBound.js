// You are given n different numbers and an integer k. 
// Write a program that finds lower bound of k in log(n) time complexity. 
// Lower bound of a number k in a sorted list is the index of the first number 
// which is same as k, in case the number is not present, print -1 
// (here the answer is given considering index to be starting from 0)


function runProgram(input){
    // Write code here
    input = input.trim().split("\n")
    let [n,k] = input[0].trim().split(" ").map(Number)
    let arr = input[1].trim().split(" ").map(Number).sort((a,b) => a - b)
    let low = 0
    let high = arr.length
    let present = false
    let ans = -1
    while(low < high){
        let mid = Math.floor(low+(high-low)/2)
        if(mid === low || mid === high){
            break
        }
        if(arr[mid] === k){
            console.log("mid: "+ mid)
            ans = mid
            high = mid - 1
            present = true
            // break;
        }
        else if(arr[mid] < k){
            low = mid + 1
        }
        else if(arr[mid] > k){
            high = mid -1
        }
    }
    console.log(ans)
}

if(process.env.USERNAME === "hp"){
    runProgram(`6 3
    2 3 3 3 6 9`)
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