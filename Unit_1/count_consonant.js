// You are provided a string S. Your task is to write a program that counts the number of consonants (non-vowels characters) present in the string.



function runProgram(input){
    // Write code here
    var arr = input.trim().split('')
    // console.log(arr)
    var count = 0
    for (var i = 0;  i < arr.length; i++){
        if((arr[i] === "a") || (arr[i] === "e") || (arr[i] === "i") ||
        (arr[i] === "o") || (arr[i] === "u") || 
        (arr[i] === "A") || (arr[i] === "E") || (arr[i] === "I") ||
        (arr[i] === "O") || (arr[i] === "U")){
            count = count
        } else {
            count++
        }
    }
    console.log(count)
}

if(process.env.USERNAME === "LOKESH"){
    runProgram('masaischool')
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