function runProgram(input){
    // Write code here
    input = input.trim().split('\n')
    let [row, col] = input[0].trim().split(' ').map(Number)
    // console.log(row, col)

    let mat = []
    for(i=0; i<row; i++){
        mat[i] = input[i+1].trim().split('')
    }
    let str = 'saba'
    let count = 0
    // console.log(mat)
    for(let i=0; i<row; i++){
        for(let j=0; j<col-3; j++){
            if (str == mat[i][j] + mat[i][j+1] + mat[i][j+2] + mat[i][j+3]){
                count++
            }

            if(i+3 < row){      //  i < row-3
                if (str == mat[i][j] + mat[i+1][j+1] + mat[i+2][j+2] + mat[i+3][j+3]){
                    count++
                }
            }
            if(i-3 >= 0){     //  i >= 3
                if (str == mat[i][j] + mat[i-1][j+1] + mat[i-2][j+2] + mat[i-3][j+3]){
                    count++
                }
            }
        }
    }

    for(let i=0; i<row; i++){      //column
        for(let j=0; j<col; j++){
            if(i<row-3){
               if (str == mat[i][j] + mat[i+1][j] + mat[i+2][j] + mat[i+3][j]) {
                count++
            }
                
            }
        }
    }
    console.log(count)
   
}

if(process.env.USERNAME === "hp"){
    runProgram(`5 5
    safer
    amjad
    babol
    aaron
    songs`)
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