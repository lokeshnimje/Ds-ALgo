function runProgram(input){
    // Write code here
     input = input.trim().split('\n')
     let matrix = []
     
     for (var i=0; i<input.length; i++){
         matrix[i] = input[i].trim().split(' ')
     }
    // console.log(matrix)
    var count_o = 0;
    var count_x = 0;

     for(let i=0; i<matrix.length-2; i++){              //checking column
        for(let j=0; j<matrix.length; j++){
            if(matrix[i][j] == 'o' && matrix[i+1][j] == 'o' && matrix[i+2][j] == 'o'){
                count_o++
            } else if(matrix[i][j] == 'x' && matrix[i+1][j] == 'x' && matrix[i+2][j] == 'x'){
                count_x++
            }              
        }
    }

    for(let i=0; i<matrix.length; i++){                 // checking row
        for(let j=0; j<matrix.length-2; j++){
            if( matrix[i][j] == 'o' && matrix[i][j+1] == 'o' && matrix[i][j+2] == 'o'){
                count_o++
            } else if( matrix[i][j] == 'x' && matrix[i][j+1] == 'x' && matrix[i][j+2] == 'x'){
                count_x++
            }
              
            if(i+2 < matrix.length){                    // diagonal upper to lower
                if(matrix[i][j] == 'o' && matrix[i+1][j+1] == 'o' && matrix[i+2][j+2] == 'o'){
                    count_o++
                } else if(matrix[i][j] == 'x' && matrix[i+1][j+1] == 'x' && matrix[i+2][j+2] == 'x') {
                    count_x++
                }
                
            }
            if(i-2 >= 0){                               // diagonal lower to upper
                if(matrix[i][j] == 'o' && matrix[i-1][j+1] == 'o' && matrix[i-2][j+2] == 'o'){
                    count_o++
                } else if(matrix[i][j] == 'x' && matrix[i-1][j+1] == 'x' && matrix[i-2][j+2] == 'x') {
                    count_x++
                }            
            }
        }
    }

    if (count_o !== 0){
        console.log("o")
    } else if (count_x !== 0){
        console.log("x")
    } else {
        console.log("Tie")
    }
}

if(process.env.USERNAME === "hp"){
    runProgram(`x o x
    o x x
    o o o`)
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