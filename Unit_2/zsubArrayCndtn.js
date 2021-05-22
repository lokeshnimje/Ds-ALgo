function runProgram(input){
    // Write code here
    let arr = input.trim().split(' ').map(Number)
    // console.log(arr)
    for(let i=0; i<arr.length; i++){
        let res = 0
        for(let j=0; j<=i; j++){
            res += arr[j]
            console.log(res)
        }
        // if(res == 0){
        //     console.log(i + " - "+ arr[i])
        // }
    }
   
}

if(process.env.USERNAME === "hp"){
    runProgram(`6 3 -1 -3 4 -2 2 4 6`)
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