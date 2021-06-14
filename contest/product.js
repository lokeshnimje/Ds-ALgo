
function runProgram(input) {
	// Write code here
    input = input.trim().split("\n")
    let test = +input[0].trim()
    for(let i=0, j=1; i<test; i++){
        let n = +input[j++].trim()
        let arr = input[j++].trim().split(" ").map(Number)
        // console.log(arr)
        let res = []
        for(let k=0; k<arr.length; k++){
            let prod = 1
            for(let m=0; m<arr.length; m++){
                if(arr[k] !== arr[m]){
                    prod *= arr[m]
                }
            }
            res.push(prod)
        }
        console.log(res.join(' ').trim())

    }
}

if(process.env.USERNAME === "hp"){
    runProgram(`2
    5
    1 2 3 4 5
    3
    3 2 7`)
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