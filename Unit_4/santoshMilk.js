function runProgram(input){
    // Write code here
    input = input.trim().split('\n')
    let test = input.shift()
    for(let i=0; i<test; i++){
        let n = +input[i].trim()
        // console.log(n)
        
        function step(n){
            // console.log(n)
            if(n === 0){
                return 1
            } 
            if(n < 0){
                return 0
            }
            return step(n-4) + step(n-8)
        }
        console.log(step(n))
    }
 
}

if(process.env.USERNAME === "hp"){
    runProgram(`1
    12`)
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