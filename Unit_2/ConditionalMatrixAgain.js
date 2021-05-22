function runProgram(input){
    // Write code here
     input = input.trim().split('\n')    
    let dim = input.shift()
    
    let mat = []
    for(let i=0; i<input.length; i++){
        mat[i] = input[i].trim().split(' ')
    }
    console.log(mat)

    let sum = 0
    for(let i = 0; i < mat.length; i++){
        for(let j = 0; j < mat[i].length; j++){
            mat[i][j] = +mat[i][j]
            if(mat[i][j] % 3 == 0){
                sum += mat[i][j]
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