function runProgram(input){
    // Write code here
    input = input.trim().split('\n')
    let [k,n] = input[0].trim().split(' ').map(Number)
    let arr = input[1].trim().split(' ').map(Number)
    // console.log(k,n,arr)

    function nWays(k){
        if(k<0) return 0;
        if(k==0) return 1;
        let total = 0
        for(let i=0; i<arr.length; i++){
            total += nWays(k-arr[i])
        }
        return total
    }
    console.log(nWays(k)) 
  
}

if(process.env.USERNAME === "hp"){
    runProgram(`3 3
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