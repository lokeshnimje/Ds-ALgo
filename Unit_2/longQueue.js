function runProgram(input){
    // Write code here
    input = input.trim().split('\n')
    let num = +input.shift()
    let arr = input[0].trim().split(' ').map(Number)
    // console.log(num, arr)
    let len = arr.length;
    let count = 1
    for(let i=0; i<len; i++){
      if(arr[i] > arr[i+1]){
          count++
      }
    }
    console.log(count)
}

if(process.env.USERNAME === "hp"){
    runProgram(`6
    1 2 4 3 5 8`)
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