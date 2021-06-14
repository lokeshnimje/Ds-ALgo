
function runProgram(input) {
	// Write code here
    input = input.trim().split("\n")
    
    let arr = input[1].trim().split(' ').map(Number)
    let q = input[3].trim().split(' ').map(Number)
    // console.log(arr, q)
    for(let i=0; i<q.length; i++){
        let flag = false
        for(let j=0; j<arr.length; j++){
            if(q[i] == arr[j]){
                flag = true
                break
            }
        }
        if(flag){
            console.log("YES")
        } else {
            console.log("NO")
        }
    }

}

if(process.env.USERNAME === "hp"){
    runProgram(`5
    1 2 3 4 5
    3
    3 5 7`)
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