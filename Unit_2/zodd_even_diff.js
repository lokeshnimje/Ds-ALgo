function runProgram(input){
    // Write code here
    input = input.trim().split('\n')
    let test = +input[0].trim()
    for(let i=0, j=1; i<test; i++){
        let len = +input[j++].trim()
        let arr = input[j++].trim().split(' ').map(Number).sort((a,b) => a-b)
  
        let even = 0;
        let odd = 0;
        for(let k=0; k<len; k++){
            (k % 2 === 0 ) ? odd += arr[k] : even += arr[k]
        }
        console.log(Math.abs(even-odd))
    }   //5012
}
if(process.env.USERNAME === "hp"){
    runProgram(`2
    7
    1398 8473 6502 4630 2678 46 6659   
    4
    4 2 1 3`)
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