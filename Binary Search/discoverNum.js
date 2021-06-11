function runProgram(input){
    // Write code here
    input = input.trim().split("\n")
let num = +input[0].split(" ")[1]
let arr = input[1].split(" ").map(Number).sort((a,b) => a - b)
for (let i = 2; i < input.length; i++){
let num = +input[i]
let low = 0
let high = arr.length
let present = false
const binarySearch = (low, high) => {
    mid = Math.floor((low + high)/2)
    if(arr[low] === num || arr[high] === num){
        present = true
        return
    }
    if(mid === low || mid === high){
        return
    }
    if(arr[mid] === num){
        present = true
        return;
    }
    else if(arr[mid] < num){
        low = mid
    }
    else if(arr[mid] > num){
        high = mid
    }
    return binarySearch(low, high)
}
binarySearch(low, high)
present? console.log("YES"): console.log("NO")
}
  
}

if(process.env.USERNAME === "hp"){
    runProgram(``)
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