function runProgram(input){
    // Write code here
    let [n,k] = input.trim().split(' ')
    // console.log(n.length)
    let p = 0
    for(let i=0; i<n.length; i++){
        p += +n[i]
    }
    p = p * k
    p = p.toString().split('')

    // console.log(p)
    // console.log(p.length)

    function superDigit(p){
        let sum = 0
        let len = p.length
        for(let i=0; i<len; i++){
            sum += +p[i]
            // console.log(sum)
        }
        if(sum > 9){
            let str = sum.toString().split('')
            return superDigit(str)
        } else if (sum <= 9) {
            // return sum
            console.log(sum)
        }
    }
    superDigit(p)
}

if(process.env.USERNAME === "hp"){
    runProgram(`148 3`)
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