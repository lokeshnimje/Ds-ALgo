
function runProgram(input) {
	// Write code here
    input = input.trim().split("\n")
    let test = +input[0].trim()
    for(let i=0, j=1;i<test;i++){
      let n = +input[j++].trim()
      let arr = input[j++].trim().split(" ").sort((a,b)=>a-b)
      let even =[]
      let odd = []
    
        for(let i=0; i<n; i++){
            if(arr[i]%2==0){
                even.push(arr[i])
            } else{
                odd.push(arr[i])
            }
        }
        let ans = odd[odd.length-1] - even[0]
        console.log(ans)
    }
}

if(process.env.USERNAME === "hp"){
    runProgram(`1
    5
    3 1 2 4 5`)
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