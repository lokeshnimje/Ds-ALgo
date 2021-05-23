function runProgram(input){
    // Write code here
    input = input.trim().split('\n')
    let test = +input[0].trim()
    for(let i=0, j=1; i<test; i++){
        let dim = +input[j++].trim()
        let arr = input[j++].trim().split(' ').map(Number)
        // console.log(arr)
        
        let sum = 0;
        for(let i=0; i<dim; i++){
            sum += arr[i] * (i+1)
        }
        console.log(sum)
    }
  
}

if(process.env.USERNAME === "hp"){
    runProgram(`2
    5
    1 2 3 4 5
    2
    100 1`)
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