function runProgram(input){
    // Write code here
    input = input.trim().split("\n")
    let test = +input[0].trim()

    for (let i=0, j=1; i<test; i++){
        let dim = +input[j++].trim()
        let arr = input[j++].trim().split(" ").map(Number)
        let low = 0
        let high = arr.length
        let ans = -1
        let one = 1
        while(low < high){
            let mid = Math.floor(low + (high-low)/2)

            if(mid === low){
            if(arr[mid] === one){
                ans = mid
            }
            break
            }
            if(arr[mid] === one){
                ans = mid
                high = mid
            } 
            else if(arr[mid] < one){
                low = mid 
            }
            else if(arr[mid] > one){
                high = mid
            }  
        }
        console.log(ans)
    }
}

if(process.env.USERNAME === "hp"){
    runProgram(`2
    4
    0 0 0 1 
    1
    1`)
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