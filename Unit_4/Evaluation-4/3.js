function runProgram(input){
    // Write code here
    input = input.trim().split('\n')
    let [k,n] = input[0].trim().split(' ').map(Number)
    let arr = input[1].trim().split(' ').map(Number)
    let cweight = 0;
    let days = 0
    let max = 0;
    let min = Infinity
    function transport (n, arr, k, cweight, days){
        // console.log(cweight, days, k)
        if(cweight > k){
            // console.log("-1")
            return -1
        } else 
        if(cweight === k){
            max = Math.max(days, max);
            min = Math.min(days, min)
            // console.log(min, max)
            return 
        }
        for(let i=0; i<arr.length; i++){
            transport(n, arr, k, cweight+arr[i], days+1)
        }
    }
    transport(n, arr, k, cweight, days)

    if(min==Infinity && max==0){
        console.log("-1")
    }else {
        console.log(min, max)
    }
}

if(process.env.USERNAME === "hp"){
    runProgram(`36 2
    1 10`)
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