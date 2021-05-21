function runProgram(input){
    // Write code here
    input = input.trim().split('\n') 
    var a = Number(input.shift());
    var arr = input[0].trim().split(" ");
    var sum = 0
    for (var i = 0;  i < arr.length; i++){
        arr[i] = Number(arr[i])
        if(i % 2 !== 0){
            sum += arr[i]
        }
    }  
    console.log(sum)
}

if(process.env.USERNAME === "LOKESH"){
    runProgram(`5
    3 5 0 9 8`)
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