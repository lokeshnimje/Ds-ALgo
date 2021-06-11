function runProgram(input){
    // Write code here
    input = input.trim().split("\n")
    let [n,k] = input[0].trim().split(" ").map(Number)
    let arr = input[1].trim().split(" ").map(Number)
    let low = 0
    let high = arr.length
    let count = 0
    binarySearch(low, high)
    function binarySearch (low, high) {
        let mid = Math.floor(low+(high-low)/2)
        // console.log(mid)
        if(mid === low || mid === high){
            return 
        } else 
        if(arr[mid] === k){
            // console.log(arr[mid])
            count++
        }
        else if(arr[mid] < k){
            low = mid
        }
        else if(arr[mid] > k){
            high = mid
        }
        return binarySearch(low, high)
    }
    console.log(count > 0 ? count:-1)
}

if(process.env.USERNAME === "hp"){
    runProgram(`6 3
    2 3 3 3 3 9`)
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