
function runProgram(input) {
	// Write code here
    input=input.split("\n")
    let n = +input[0]
    let arr = input[1].trim().split(" ").join("")
    let res = ""
    // console.log(arr)
    permutation(arr,res)  
}
function permutation(arr,res){
    if(arr.length === 0){
        console.log(res.split("").join(" "))
        return 
    }
    for(let i=0; i<arr.length; i++){
        let fixed = arr.charAt(i)
        let left = arr.substring(0,i)
        let right = arr.substring(i+1)
        let balance = left + right;
        // console.log(left, right, balance)
        permutation(balance, res+fixed)
    }
}
if(process.env.USERNAME === "hp"){
    runProgram(`3
    1 2 3`)
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