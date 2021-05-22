function runProgram(input){
    // Write code here
    input = input.trim().split('\n')
    let [row, col, p] = input[0].trim().split(' ').map(Number)
    // console.log(row, col, p)

    let mat = []
    for(i=0; i<row; i++){
        mat[i] = input[i+1].trim().split(' ').map(Number)
    }
    let prod1 = 0
    let prod2 = 0
    let dia1 = 0
    let dia2 = 0
    let count = 0
    // console.log(mat)
    for(let i=0; i<row; i++){
        for(let j=0; j<col-2; j++){     // row
            prod1 = mat[i][j] * mat[i][j+1] * mat[i][j+2]
            if(prod1 == p) count++  

            if(i+2 < row){      //  i < row-2       //dia up to down
                dia1 = mat[i][j] * mat[i+1][j+1] * mat[i+2][j+2]
                if(dia1 == p) count++
            }
            if(i-2 >= 0){     //  i >=          // dia down to up
                dia2 = mat[i][j] * mat[i-1][j+1] * mat[i-2][j+2]
                if(dia2 == p) count++
            }
        }
    }

    for(let i=0; i<row; i++){           // col
        for(let j=0; j<col; j++){
            if(i<row-2){
                prod2 = mat[i][j] * mat[i+1][j] * mat[i+2][j]
                if(prod2 == p) count++
            }
        }
    }
    console.log(count)
   
}

if(process.env.USERNAME === "hp"){
    runProgram(`4 4 16
    1 2 1 8
    2 2 8 6
    8 1 2 5
    2 5 8 6`)
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