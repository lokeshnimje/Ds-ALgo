// make new string which is index square of given string's index.
function runProgram(input){
    // Write code herec
    let str = input.trim()
    let alpha = "abcdefghijklmnopqrstuvwxyz"
    // console.log(str[0])
    let ans = ""
    for(let i=0; i<str.length; i++){
        for(let j=0; j<alpha.length; j++){
            if(str[i] === alpha[j]){
                let sqr = j * j
                if(sqr > alpha.length){
                    sqr = sqr % alpha.length
                }
                ans += alpha[sqr]

            }
        }
    }
    console.log(ans)
}

if(process.env.USERNAME === "hp"){
    runProgram(`abcd`)
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