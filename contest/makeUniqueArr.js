
function runProgram(input) {
	// Write code here
    input = input.trim().split("\n")
    let n = +input.shift()
    let arr = input[0].trim().split(' ').map(Number)
    // console.log(arr)
    for(let i=0; i<arr.length; i++){
        while(arr[i] === arr[i+1]){
            arr.splice(i+1,1)
        }
    }    
    console.log(arr.join(' '))
}

if(process.env.USERNAME === "hp"){
    runProgram(`5
    2 2 2 7 9
    `)
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