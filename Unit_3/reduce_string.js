function runProgram(input){
    // Write code here
    input = input.trim().split('')
  
    let arr = []
    for(let i=0; i<input.length; i++){
        if(arr.length == 0 || arr[arr.length-1] !== input[i]){
            arr.push(input[i])
        }else {
            // console.log(arr)
            arr.pop()
        }
    }
    if(arr.length==0){
        console.log("Empty String")
    } else {
        console.log(arr.join(''))
    }
}

if(process.env.USERNAME === "hp"){
    runProgram(`aaabccddd`)
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