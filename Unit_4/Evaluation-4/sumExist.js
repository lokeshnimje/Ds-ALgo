function runProgram(input){
    // Write code here
    input = input.trim().split('\n')
    let n = input[0].trim()
    let arr = input[1].trim().split(' ').map(Number)
    // let sum = arr.reduce((a,b) => { return a+b},0)
    // console.log(sum)
    let k = +input[2].trim()
    let flag = false
    let start = 0
    let res = []
    function findSum(start, arr, k, res){
        let sum = 0
        if(res.length > 1){
            sum = res.reduce((a,b) => { return a+b},0)
        }
        if(sum > k){
            return
        } else if (sum === k){
            // console.log(res)
            flag = true
            return
        }
        for(let i=start; i<arr.length; i++){
            if(!flag){
                res.push(arr[i])
                findSum(start+1, arr, k, res)
                res.pop()
            }
        }
    }
    findSum(start, arr, k, res)
    console.log(flag? "yes":"no")
 
}
// Time complexity is O(2 to power n)

if(process.env.USERNAME === "hp"){
    runProgram(`9
    1 2 3 4 5 6 7 8 9
    5`)
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