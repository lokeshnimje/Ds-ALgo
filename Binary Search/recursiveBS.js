// Given n distinct numbers, implement a recursive binary search to check 
// the presence of target number k.
// In case k is present among those n numbers, print 1 Else print -1
// using recursive approach


function runProgram(input){
    // Write code here
    input = input.trim().split("\n")
    let [n,k] = input[0].trim().split(" ").map(Number)
    let arr = input[1].trim().split(" ").map(Number).sort((a,b) => a - b)
    let low = 0
    let high = arr.length
    let present = false
    binarySearch(low, high)
    function binarySearch (low, high) {
        mid = Math.floor((low + high)/2)
        if(mid === low || mid === high){
            return
        } else 
        if(arr[mid] === k){
            present = true
            return;
        }
        else if(arr[mid] < k){
            low = mid
        }
        else if(arr[mid] > k){
            high = mid
        }
        return binarySearch(low, high)
    }
    console.log(present?1:-1)
    
}

if(process.env.USERNAME === "hp"){
    runProgram(`5 0
    2 -2 0 3 4`)
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