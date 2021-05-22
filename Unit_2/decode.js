function runProgram(input){
    // Write code here
    let arr = input.trim().split('')
    // console.log(arr)
    let max = 1;        // if we are putting max&count = 0; then we need to console (max+1)
    let count = 1;
    for(let i=0; i<arr.length; i++){
        // console.log(arr[i]+" , "+ arr[i+1])
        if(arr[i]  === arr[i+1]){
            count++
        } else {count = 1}
            
        if(max < count){
            max = count
        }
        
    }
    console.log(max)
}

if(process.env.USERNAME === "hp"){
    runProgram(`ATTCGGGA`)
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