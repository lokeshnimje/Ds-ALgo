function runProgram(input){
    // Write code here
     input = input.trim().split('\n')
     let row = Number(input[0])
     let matrix = []
     for (let i=1; i<=row; i++){
         matrix[i-1] = input[i].trim().split(' ')
     }

     for(let j=row-1; j>=0; j--){
        let temp = ""
        for(let i=0; i<row; i++){
            temp += matrix[i][j] + " "
        }
        console.log(temp.trim())
    }

}

if(process.env.USERNAME === "hp"){
    runProgram(`4
    1 2 3 4
    5 6 7 8
    1 2 3 4
    5 6 7 8`)
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