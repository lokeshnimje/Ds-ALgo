function runProgram(input){
    // Write code here
    input = input.trim().split("\n")
    let test = +input[0].trim()
    // console.log(test)

    for(let i=0, j=1; i<test; i++){
        let dim = input[j++]
        let mat = []
        for(let k=0; k<dim; k++){
            mat[k] = input[j++].trim().split(' ')
        }
        // console.log(mat)
        let res =[]
        for(let m=0; m<mat.length; m++){
            for(let n=0; n<mat[m].length; n++){
                    res[n] = mat[n][m]
            }
            console.log(res.join(' '))
        }
    }
}

if(process.env.USERNAME === "hp"){
    runProgram(`2
    3
    1 2 3
    4 5 6
    7 8 9
    4
    2 3 5 6
    4 5 7 9
    8 6 4 9
    1 3 5 6`)
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