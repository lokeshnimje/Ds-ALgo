function runProgram(input){
    // Write code here
    input = input.trim().split('\n')
    let n = +input[0].trim()
    let arr = input[1].trim().split(' ').map(Number)
    let i=-1;
    let res = ""
    let out = []
    let index = 0
     
    let count = 0
    function solve(index, arr, count, sum){
        if(index === arr.length){
            if(sum % 2 === 1){
                count++
            }
        }
        // solve(index+1, arr, count, sum+arr[index])
        // solve(index+1, arr, count, sum)
    }

    function subset(n,arr,i,res,out){
        let str = []
        let sum = 0
        if(n===i){
            return
        }
        if(res !== ""){
            str = res.trim().split('').map(Number)
            console.log(str)
            for(let i=0; i<str.length; i++){
                sum  = Math.abs(sum + str[i])
            }
            if(sum % 2 == 1){
                count++
            }
            // console.log(count)
        }
        for(let j=i+1; j<n; j++){
            res += arr[j]
            subset(n,arr,j,res,out)
            res = res.substring(0,res.length-1)
        }
    }
    subset(n,arr,i,res,out)
    console.log(count)   

}
// Time coplexity is O(2 to power n)
// space comp = O(n)
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