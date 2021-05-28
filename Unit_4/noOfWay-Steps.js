function runProgram(input){
    // Write code here
    let n = +input.trim()
    function step(n){
        // console.log(n)
        // n=0 => 1
        // n<0 => 0
        if (n > 0){
            if(n === 1){
                return 1
            } 
            if(n === 2){
                return 2
            }
            return step(n-1) + step(n-2) + step(n-3)
        } else {
            return 1
        }
    }
    // console.log(step(n))
    // console.log(stepCount(n));
    // function stepCount(step) {
    //     if (step < 0) return 0;
    //     if (step == 0) return 1;
    // return stepCount(step - 1) + stepCount(step - 2) + stepCount(step - 3);
    //   }

 
}

if(process.env.USERNAME === "hp"){
    runProgram(`4`)
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