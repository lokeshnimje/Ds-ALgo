function runProgram(input){
    // Write code here
     input = input.trim().split('\n')
     let a = input[0].trim().split(' ').map(Number)
     let s = a[2]
    //  console.log(s)

     var n = input.shift()
     let matrix = []
     
     for (var i=0; i<input.length; i++){
         matrix[i] = input[i].trim().split(' ').map(Number)
     }
     var count = 0;
     var sum_row = 0 
     var sum_col = 0
     var sum_dia1 = 0
     var sum_dia2 = 0
    for(let i=0; i<matrix.length; i++){
        for(let j=0; j<matrix.length-2; j++){       //checking row
            sum_row = matrix[i][j] + matrix[i][j+1] + matrix[i][j+2]
            if(sum_row == s){
                count++
            }    
        if(i+2 < matrix.length){            // checking diagonal
                sum_dia1 = matrix[i][j] + matrix[i+1][j+1] + matrix[i+2][j+2]
                if(sum_dia1 == s){
                    count++
                }
            }
            if(i-2 >= 0){
                sum_dia2 = matrix[i][j] + matrix[i-1][j+1] + matrix[i-2][j+2]
                if(sum_dia2 == s){
                    count++
                }
            }
        }
    }

    for(let i=0; i<matrix.length-2; i++){               //checking column
        for(let j=0; j<matrix.length; j++){
            sum_col = matrix[i][j] + matrix[i+1][j] + matrix[i+2][j]
            if(sum_col == s){
                count++
            }    
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