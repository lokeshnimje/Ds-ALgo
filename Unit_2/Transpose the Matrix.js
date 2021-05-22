function runProgram(input){
    // Write code here
     input = input.trim().split('\n')
     let dim = input[0].trim().split(' ').map(Number)
     let row = dim[0]
     let matrix = []
     for (let i=1; i<=row; i++){
         matrix[i-1] = input[i].trim().split(' ')
     }
    //  console.log(matrix)

     let transpose = []
     for( let i=0; i<matrix.length; i++){
         for(let j=0; j<matrix[0].length; j++){
             if(transpose[j] === undefined) {
                transpose[j] = []
             }
             transpose[j][i] = matrix[i][j]
         }
     }
     
     transpose.forEach(function(el) {
        console.log (el.join(' '))
     })
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