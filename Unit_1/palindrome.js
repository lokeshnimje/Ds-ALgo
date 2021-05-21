// Given an integer, print "Yes" (without quotes) if that integer is aPalindrome, else print "No" (without quotes)


function runProgram(input){
    // Write code here
    var int = input.trim().split('')
    // console.log(int)
    var flag = true
    for (let i =0, j = int.length-1; i<int.length; i++, j--){
        if(int[i] !== int[j]){
            flag = false
            // console.log(i)
            break
        }
    }
    console.log(flag ? "Yes":"No")
}

if(process.env.USERNAME === "LOKESH"){
    runProgram(`1221`)
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
