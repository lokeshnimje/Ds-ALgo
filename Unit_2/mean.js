function runProgram(input){
    // Write code here
    input = input.trim().split('\n')
    let test = +input[0].trim()
    // console.log(test)

    for(let i=0, j=1; i<test; i++){
        let len = +input[j++].trim()

        let arr = input[j++].trim().split(' ').map(Number)
        let sum = 0
        for(let k=0; k<len; k++){
            sum += arr[k]
        }
        let mean = Math.floor(sum/len)
        console.log(mean)
    }

}

if(process.env.USERNAME === "hp"){
    runProgram(`2
    2
    1 2
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