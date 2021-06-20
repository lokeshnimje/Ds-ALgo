// make minimum number.
function runProgram(input){
    // Write code here
    input = input.trim().split("\n")
    let test = +input[0].trim()
    for(let i = 1; i <= test; i++ ){
        let num = input[i].trim().split("")
        if(num[0] === "-"){
            num.shift()
            num.sort((a,b) => b - a)
            num.unshift("-")
            num.join("")
        } else {
            num.sort((a,b) => a - b)
            let a = num.filter(e => e == "0")
            let b = num.filter(e => e !== "0")
            // console.log(a,b)
            a.unshift(b[0])
            b.shift()
            num = [...a,...b]
        }

        console.log(num.join(""))
    }
  
}

if(process.env.USERNAME === "hp"){
    runProgram(`2
    533304121
    -1002911
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