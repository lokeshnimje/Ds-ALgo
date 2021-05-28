function runProgram(input){
    // Write code here
    input = input.trim().split('\n')
    let test = +input[0].trim()

    for(let i=0, j=1; i<test; i++){
        let dim = +input[j++].trim()
        let arr = input[j++].trim().split(' ').map(Number)
        let sum = 0
        function sumOfArr (arr, len) {
            sum += Math.abs(arr[len] - arr[len-1])
            if(len == 1){
                return sum
            }
            return sumOfArr(arr, len-1)
        }
        console.log(sumOfArr(arr, arr.length-1))
    }

}

if(process.env.USERNAME === "hp"){
    runProgram(`2
    3
    1 5 2
    5
    3 5 6 1 8`)
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