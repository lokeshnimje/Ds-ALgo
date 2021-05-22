function runProgram(input){
    // Write code here
    input = input.trim().split('\n')
    let num = +input.shift()
    let arr = input[0].trim().split(' ').map(Number)

    for (let i = 0; i < num; i++) {
        for (let j = 0; j < num-i-1; j++) {
            if (arr[j] > arr[j + 1]) {
                let tmp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = tmp;
            }
        }
    }
    console.log(arr.join(' '));
}

if(process.env.USERNAME === "hp"){
    runProgram(`5
    3 5 0 9 8`)
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