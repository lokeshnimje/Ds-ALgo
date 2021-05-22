function runProgram(input){
    // Write code here
    input = input.trim().split('\n')
    let num = +input.shift()
    let mat = []
    for(let i=0; i<num; i++){
        mat[i] = input[i].trim().split(' ')
    }
    for(let i=0; i<num; i++){
        for(let  j=0; j<num-i-1; j++){
            if(Number(mat[j][1]) < Number(mat[j+1][1])){
                [mat[j], mat[j+1]] = [mat[j+1], mat[j]]
            } else if(Number(mat[j][1]) === Number(mat[j+1][1])){   // this part is not ask
                if(mat[j][0] > mat[j+1][0]){                        // in que, but here it is checking
                    [mat[j], mat[j+1]] = [mat[j+1], mat[j]]     // if quotient are same then arrange them in 
                }                                                // alphabeticaly
            }
        }
    }
    console.log(mat[0][0])
}
if(process.env.USERNAME === "hp"){
    runProgram(`4
    ankit 10
    amit 40
    shivam 23
    shubham 33`)
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