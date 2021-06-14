function runProgram(input){
    // Write code here
    input = input.trim().split('\n')
    let test = +input[0].trim()
    for(let i=0, j=1; i<test; i++){
        let num = +input[j++].trim()
        max = 1
        for(let k = 1; k <= num; k++) {
             if(num % k == 0) {
                if(k % 2 == 1){
                    if(k > max){
                        max = k
                    }
                }
            }
         }
         console.log(max)
    }
}

if(process.env.USERNAME === "hp"){
    runProgram(`2
    10
    4`)
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