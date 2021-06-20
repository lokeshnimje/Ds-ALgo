// find given string is skew or not. if even > odd = skew.
function runProgram(input){
    // Write code here
    input = input.trim().split("\n")
    let test  = +input[0].trim()
    for (let k = 0, j = 1 ; k < test; k++){
        let num = +input[j++].trim()
        let even  = 0
        let odd = 0
        for (let i = 1 ; i <= num ; i++){
            if (num % i === 0) {
                if (i % 2 === 0) {
                    even++
                }else {
                    odd++
                }
            }
        }
        if (even > odd) {
            console.log("Even Skewed")
        }
        else if (even < odd) {
            console.log("Odd Skewed")
        } 
        else{
            console.log("Not Skewed")
        }
    }
}

if(process.env.USERNAME === "hp"){
    runProgram(`3
    4
    6
    11
    `)
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