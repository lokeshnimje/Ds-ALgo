function runProgram(input){
    // Write code here
    input = input.trim().split('\n')
    let test = +input.shift()
    for(let k=0; k<test; k++){
        let a = input[k].trim().split('')
        let len = a.length
        let b=""
        for(let i=len-1, j=0; i>=0, j<len; i--, j++){ 
            b += a[i]
        }
        console.log(b)
    }
}
if(process.env.USERNAME === "hp"){
    runProgram(`3
    ab
    cd
    ef`)
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