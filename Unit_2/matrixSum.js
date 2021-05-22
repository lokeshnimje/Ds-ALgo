function runProgram(input){
    // Write code here
    input = input.trim().split('\n')
    let [row, col] = input[0].trim().split(' ').map(Number)
    // console.log(row, col);
    let mat = []
    let sum = 0
    for(let k=1; k<=row; k++){
        mat[k-1] = input[k].trim().split(' ').map(Number)
        for(let j=0; j<col; j++){
            if(mat[k-1][j] % 3 === 0){
                sum += mat[k-1][j]
            }
        }
    }  
    console.log(sum)
}
if(process.env.USERNAME === "hp"){
    runProgram(`2 3
    3 1 8
    2 6 0`)
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