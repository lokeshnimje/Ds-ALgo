function runProgram(input){
    // Write code here
    input = input.trim().split('\n')
    let [r1, c1] = input[0].trim().split(' ').map(Number)

    let mat1 = []
    for(let i=1; i<=r1; i++){
        mat1[i-1] = input[i].trim().split(' ').map(Number)
    }
    // console.log(mat1)
    let [r2, c2] = input[r1+1].trim().split(' ').map(Number)
    let mat2 = []
    for(let j=1; j<=r2; j++){
        mat2[j-1] = input[r1+j+1].trim().split(' ').map(Number)
    }
    // console.log(mat2)
    function findSum(row,col,matrix){
        let sum = 0
        for(let k=0; k<row; k++){
            for(let l=0; l<col; l++)
            sum += matrix[k][l]
        }
        return sum
    }
    let sum1 = findSum(r1,c1,mat1)
    let sum2 = findSum(r2,c2,mat2)
    console.log(sum1 > sum2 ? sum1 : sum2)

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