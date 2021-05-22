function runProgram(input){
    // Write code here
  input = input.trim().split('\n')
  let test = +input[0].trim()

  for(let i=0, j=1; i<test; i++){
        let dim = +input[j++].trim()

        let mat = []
        for(let k=0; k<dim; k++){
            mat[k] = input[j++].trim().split(' ').map(Number)
        }

        let first = ''
        let secnd = ''
        let thrd = ''
        for(let i=0; i<dim; i++){
            for(let j=0; j<dim; j++){
                if(i === 0){
                    first += mat[i][j] + " "
                }
                else if(i = dim-1){
                    thrd += mat[i][j] + " "
                }
            }
        }
        for(let i=1, j=dim-2; i<dim-1, j>0; i++, j--){
                secnd += mat[i][j] + " "
        }
        console.log(first+secnd+thrd)
    }
}

if(process.env.USERNAME === "hp"){
    runProgram(`1
    3
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
