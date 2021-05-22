function runProgram(input){
    // Write code here
    input = input.trim().split('\n')
    var [row, col] = input[0].trim().split(' ').map(Number)
    // console.log(row, col)
    var mat = []
    for(let i=1; i<=row; i++){
        var arr = input[i].trim().split(' ');
        mat.push(arr)
    }
    // console.log(mat)

    var str = ""
    for(let j=0; j<mat.length; j++){
        if(j % 2 == 1){
            str += mat[j].join(' ') + " "
        } else {
            str += mat[j].reverse().join(' ') + " "
        }
    }
    console.log(str)
}

if(process.env.USERNAME === "hp"){
    runProgram(`5 5
    4 7 1 1 7
    8 9 9 6 1
    6 4 9 5 1
    7 7 4 7 7
    8 6 2 5 5`)
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