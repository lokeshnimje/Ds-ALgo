function runProgram(input){
    // Write code here
     var input = input.trim().split('\n')
     var [row, col] = input[0].trim().split(' ').map(Number)

     var mat1 = []
     for( var i=1; i<=row; i++){
        mat1.push(input[i].trim().split(" ").map(Number))
     }
     var mat2 = []
     for (var i= row+2; i<input.length; i++){
         mat2.push(input[i].trim().split(" ").map(Number))
     }
     var sum1 = 0
     for(var i=0; i<mat1.length; i++){
         for(var j=0; j< mat1[i].length; j++){
             sum1 += mat1[i][j]
         }
     }
     var sum2 = 0
     for(var i=0; i<mat2.length; i++){
         for(var j=0; j< mat2[i].length; j++){
             sum2 += mat2[i][j]
         }
     }
     
     if(sum1 > sum2){
         console.log(sum1)
     } else {
         console.log(sum2)
     }
}

if(process.env.USERNAME === "hp"){
    runProgram(`3 4
    1 2 3 4
    0 5 6 1
    9 3 0 8
    2 2
    8 8
    8 8`)
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