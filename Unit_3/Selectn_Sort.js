function runProgram(input){
    // Write code here
    input = input.trim().split('\n')
    let n = +input[0].trim()
    let arr = input[1].trim().split(' ').map(Number)
    for(let i=0; i<arr.length; i++){
        let min = i
        for(let j=i+1; j<arr.length; j++){
            if(arr[j] < arr[min]){
                min = j
            }
        }
        if(min !== i){
            [arr[min], arr[i]] = [arr[i], arr[min]]
        }
    }
    console.log(arr.join(' '))
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