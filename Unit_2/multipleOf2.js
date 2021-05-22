function runProgram(input){
    // Write code here
    input = input.trim().split('\n')
    let test = +input[0].trim()
    // console.log(test)

    for(let i=0, j=1; i<test; i++){
        let len = +input[j++]
        let arr = input[j++].trim().split(' ').map(Number)
        let count = 0
        for(let k=0; k<len; k++){
            if(arr[k] % 2 === 0){
                count++
            }
        }
        console.log(count)
    }
   
}
if(process.env.USERNAME === "hp"){
    runProgram(`2
    2
    1 1
    3
    1 2 3`)
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