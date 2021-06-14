
function runProgram(input) {
	// Write code here
    input = input.trim().split('\n');
    let test = +input[0];
    let ind = 1;
    for (let i = 0; i < test; i++) {
        let [row, col] = input[ind++].trim().split(" ").map(Number)
        let mat = [];
        for (let k = 0; k < row; k++) {
            mat.push(input[ind++].trim().split(""))
        }
        let count = 0;
        for (let j = 0; j < row; j++) {
            for (let k = 0; k < col; k++) {
                if (k < col - 2) {
                    if (mat[j][k] + mat[j][k+1] + mat[j][k+2] === "isa") {
                        count++;
                    }
                }
                if (j < row - 2) {
                    if (mat[j][k] + mat[j+1][k] + mat[j+2][k] === "isa") {
                        count++
                    }
                }
            }
        }
        console.log(count);
    }
}

if(process.env.USERNAME === "hp"){
    runProgram(`2
    3 3
    isa
    sia
    ais
    5 3
    isa
    sia
    ais
    ssa
    aai`)
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