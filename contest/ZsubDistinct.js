
function runProgram(input) {
	// Write code here
    input = input.trim().split("\n")
    let [n,k] = input[0].trim().split(' ').map(Number)
    let arr =  input[1].trim().split('')
    // console.log(arr)
    let count = 0
    for(let i=0; i<n-1; i++){
        let temp = []
        for(let j=i; j<n; j++){
            temp.push(arr[j])
            if(temp.length === 2){
                break
            }
        }
        // console.log(temp)
        if(temp[0] !== temp[1]){
            count++
        }
    }
    console.log(count)
  
}

if(process.env.USERNAME === "hp"){
    runProgram(`4 2
    abcc`)
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