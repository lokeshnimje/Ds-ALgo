
function runProgram(input) {
	// Write code here
    input = input.trim().split("\n")
    let test = +input[0].trim()
    
    for(let i=0, j=1; i < test; i++){
        let [n,m] = input[j++].trim().split(" ").map(Number)
        let arr = input[j++].trim().split(" ").map(Number)
        // console.log(n,m);
        let sum = 0
        for(let j = 0; j < n; j++){
            sum += arr[j]
        }
        if(m <= sum){
            console.log(m);
        }
        else{
            console.log(sum);
        }
    }
}

if(process.env.USERNAME === "hp"){
    runProgram(`2
    4 10
    1 2 3 4
    4 5
    1 2 3 4`)
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