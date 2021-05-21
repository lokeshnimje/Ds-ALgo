function runProgram(input){
    // Write code here
    input = input.trim().split('\n') 
    var a = Number(input.shift());
    var arr = input[0].trim().split(" ");
    var count = 0
    for (var i = 0;  i < arr.length; i++){
        arr[i] = Number(arr[i])
        if(i === 0) {
            if (arr[i] > arr[i+1]){
            count++
            }
        } else if (i === arr.length-1){
            if (arr[arr.length-1] > arr[arr.length-2]){
            count++
            }
        }
        else if((arr[i] > arr[i-1]) && (arr[i] > arr[i+1])){ 
            count++
        }
    }  
    console.log(count)
}

if(process.env.USERNAME === "LOKESH"){
    runProgram(`8
    1 2 3 4 2 1 6 5`)
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