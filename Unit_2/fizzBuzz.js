function runProgram(input){
    // Write code here
    input = input.trim().split('\n')
    let test = +input.shift()
    for(let i=0; i<test; i++){
        for(let j=1; j<=input[i]; j++){
            // console.log(j)
            if ((j % 3 === 0) && (j % 5 === 0)){
                console.log("FizzBuzz")
            }
             else if (j % 5 === 0){
                console.log("Buzz")
            } else if(j % 3 === 0){
                console.log("Fizz")
            }else {
                console.log(j)
            }
        }
    }
}

if(process.env.USERNAME === "hp"){
    runProgram(`2
    1
    3`)
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