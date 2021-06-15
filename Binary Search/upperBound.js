// You are given n different numbers and an integer k. 
// Write a program that finds upper bound of k in log(n) time complexity.
//  Upper bound of a number k in a sorted list is the index of the first 
//  number which is greater than k (here the answer is given considering 
//     index to be starting from 0)


function runProgram(input){
    // Write code here
    input = input.trim().split("\n")
    let [len, key] = input[0].trim().split(" ").map(Number)
    let arr = input[1].trim().split(" ").map(Number)
    console.log(binarySearch(arr,key))

    function binarySearch(arr,key){
        let low = 0
        let high = arr.length-1
        let ans = -1
        while(low <= high) {
            let mid = Math.floor(low+(high-low)/2)
            if(arr[mid] <= key){
                low = mid+1
            }
            if(arr[mid] > key){
                // console.log("mid:  "+ mid)
                ans = mid
                high = mid-1
            }
        }
        return ans
    }
}

if(process.env.USERNAME === "hp"){
    runProgram(`10 3
    0 2 4 4 5 5 7 7 9 10`)
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