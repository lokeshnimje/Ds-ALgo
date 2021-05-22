function runProgram(input){
    // Write code here
    input = input.trim().split('\n')
    let [row, col, sum] = input[0].trim().split(' ').map(Number)
    // console.log(row, col, sum)

    let mat = []
    for(i=0; i<row; i++){
        mat[i] = input[i+1].trim().split(' ').map(Number)
    }
    let sum1 = 0
    let sum2 = 0
    let dia1 = 0
    let dia2 = 0
    let count = 0
    // console.log(mat)
    for(let i=0; i<row; i++){
        for(let j=0; j<col-2; j++){     // row
            sum1 = mat[i][j] + mat[i][j+1] + mat[i][j+2]
            // console.log(mat[i][j] , mat[i][j+1] , mat[i][j+2])
            if(sum1 == sum) count++

            if(i+2 < row){          // diagonal up to down
                dia1 = mat[i][j] + mat[i+1][j+1] + mat[i+2][j+2]
                // console.log(mat[i][j] , mat[i+1][j+1] , mat[i+2][j+2])
                if(dia1 == sum) count++
            }
            if(i-2 >= 0){           // diagonal down to up
                dia2 = mat[i][j] + mat[i-1][j+1] + mat[i-2][j+2]
                // console.log(mat[i][j] , mat[i-1][j+1] , mat[i-2][j+2])
                if(dia2 == sum) count++
            }
        }
    }

    for(let i=0; i<row-2; i++){            // column
        for(let j=0; j<col; j++){
            sum2 = mat[i][j] + mat[i+1][j] + mat[i+2][j]
            // console.log(mat[i][j] , mat[i+1][j] , mat[i+2][j])
            if(sum2 == sum) count++
        }
    }
    console.log(count)
   
}

if(process.env.USERNAME === "hp"){
    runProgram(`3 3 6
    3 2 1
    2 2 2
    1 5 1`)
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