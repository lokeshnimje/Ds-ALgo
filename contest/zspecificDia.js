// In this 3*3 Matrix, suppose we need to print the diagonal of 6, 
// So the output will be :
// 2 6 
// 6 8

function runProgram(input) {
	// Write code here
    input = input.trim().split("\n")
    let [r,c] = input[0].trim().split(' ').map(Number)
    let mat = []
    for(let i=1; i<=r; i++){
        mat[i-1]= input[i].trim().split(' ').map(Number)
    }
    let k = +input[r+1].trim()
    // console.log(k)
    for(let i=0; i<r; i++){
        for(let j=0; j<c; j++){

        }
    }
}

if(process.env.USERNAME === "hp"){
    runProgram(`3 3
    1 2 3
    4 5 6
    7 8 9
    6`)
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