function runProgram(input){
    // Write code here
    input = input.trim().split('\n')
    let n = +input[0].trim()
    let arr = input[1].trim().split(' ').map(Number)
    let mat = []
    for(let i=0; i<n; i++){
        mat[i] = [arr[i],i] // push index along with element
    }
    console.log(mat)
    for(let i=0; i<n; i++){
        for(let j=0; j<n-i-1; j++){
            if(mat[j][0] > mat[j+1][0]){
                [mat[j], mat[j+1]] = [mat[j+1], mat[j]]
            }
        }
    }
    console.log(mat.map(el=>el[1]).join(' '))
}

if(process.env.USERNAME === "hp"){
    runProgram(`5
    4 5 3 7 1`)
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