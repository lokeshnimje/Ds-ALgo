function runProgram(input){
    // Write code here
    input = input.trim().split('\n')
    let test = +input[0].trim()
    for(let i=0, j=1; i<test; i++){
        let [n,m,q] = input[j++].trim().split(' ').map(Number)
        // console.log(n,m,q)
        let mat = []
        for(let i=0; i<n; i++){
            mat[i] = input[j++].trim().split(' ')
        }
        // console.log(mat)
        let res = ""
        for(let k=0; k<mat.length; k++){
            if(q == 1){
                if(k % 2 !== 0){
                    res += mat[k].reverse().join(' ') + " "
                } else {
                    res += mat[k].join(' ') + " "
                }
            } else if(q == 2){
                if(k % 2 == 0){
                    res += mat[k].reverse().join(' ') + " "
                } else {
                    res += mat[k].join(' ') + " "
                }
            }
        }
        console.log(res.trim())
    }
}

if(process.env.USERNAME === "hp"){
    runProgram(`2
    3 3 1
    1 2 3
    4 5 6
    7 8 9
    3 3 2
    1 2 3
    4 5 6
    7 8 9
    `)
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