function runProgram(input){
    // Write code here
    input = input.trim().split('\n')
    let [row, col] = input[0].trim().split(' ').map(Number)
    // console.log(row, col); 
    
    let mat = []
    for(let i=0; i<row; i++){
        mat[i] = input[i+1].trim().split(' ')
    }
    // console.log(mat)
    let new_mat = []
    for(let i=0; i<row; i++){
        for(let j=0; j<col; j++){
            if(new_mat[j] === undefined){
                new_mat[j] = []
            }
            new_mat[j][i]= mat[i][j]
        }
    }
    // console.log(new_mat)

     new_mat.forEach(el =>
         console.log(el.join(' '))
     )
    
}
if(process.env.USERNAME === "hp"){
    runProgram(`5 4
    0 0 0 0
    1 1 1 1
    2 2 2 2
    3 3 3 3
    4 4 4 4`)
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