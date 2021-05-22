function runProgram(input){
    // Write code here
    input = input.trim().split('')
    // console.log(input)
    let first = []
    let second = []
    for(let i=0; i<input.length;i++){
        if(i < input.length/2){
            first.push(input[i]) 
        }else if(i >= input.length/2){
            second.push(input[i])
        }
    }
    let a = first.reverse().join('')
    let b = second.reverse().join('')
    console.log(a+b)
}

if(process.env.USERNAME === "hp"){
    runProgram(`abcxyz`)
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