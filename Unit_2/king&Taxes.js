function runProgram(input){
    // Write code here
    input = input.trim().split('\n')
    let num = +input.shift()
     let arr = input[0].trim().split(' ').map(Number).sort()
     new_arr = arr.sort((a,b) => b-a)
     console.log(new_arr)

    let res = 0
    let len = arr.length;
    for(let i=0; i<len/2; i++){
        res += new_arr[i]
    }
    console.log(res)
    
}

if(process.env.USERNAME === "hp"){
    runProgram(`2
    1 3 1 2 5 7`)
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