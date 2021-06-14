
function runProgram(input) {
	// Write code here
    input=input.split("\n")
    let N = +input[0]
    var [L, R] = input[1].trim().split(' ').map(Number)
    let arr = ""
    for(let i=1; i<=N; i++){
        arr += i
    }
    let res = ""
    let count = 0
    
    permutation(arr,res,L, R)  
    console.log(count)

    function permutation(arr,res, L, R){
        if(arr.length === 0){
            let sum = 0
            // console.log(res)
            for(let j=L; j<=R; j++){
                sum += Number(res[j])
            }
            if(sum % 2 !== 0){
                count++
            }
            // console.log(count) 
            return
        }
        for(let i=0; i<arr.length; i++){
            let fixed = arr.charAt(i)
            let left = arr.substring(0,i)
            let right = arr.substring(i+1)
            let balance = left + right;
            permutation(balance, res+fixed, L,R)
        }
        
    }
}

if(process.env.USERNAME === "hp"){
    runProgram(`3
    0 1`)
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