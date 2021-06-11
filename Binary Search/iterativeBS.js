function runProgram(input){
    // Write code here
    input = input.trim().split("\n")
    let [n,k] = input[0].trim().split(" ").map(Number)
    let arr = input[1].trim().split(" ").map(Number).sort((a,b) => a - b)
    let low = 0
    let high = arr.length
    let present = false
    while(low < high){
        let mid = Math.floor(low+(high-low)/2)
        if(mid === low || mid === high){
            break
        }
        if(arr[mid] === k){
            present = true
            break;
        }
        else if(arr[mid] < k){
            low = mid
        }
        else if(arr[mid] > k){
            high = mid
        }
    }
    console.log(present?1:-1)
}
// Timecomplexity is logN if given array is sorted, but in this case array is not sorted

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