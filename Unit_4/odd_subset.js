function runProgram(input){
    // Write code here
    input = input.trim().split('\n')
    let n = +input[0].trim()
    let original = input[1].trim().split(' ').map(Number)
    let len = original.length
    let idx = 0
    let soFar = []
    let count = 0
    function subset(original, idx, soFar){
        if(idx == len){
            let sum = soFar.reduce((a,b) => {return a+b},0)
            if(Math.abs(sum) % 2 == 1){ // to handle negative value
                // console.log(soFar+" "+ "sum  "+ sum)
                count++
            }
            return count
        }
        soFar.push(original[idx])

        subset(original, idx+1, soFar)
        
        soFar.pop()

        subset(original, idx+1, soFar)
    }

    subset(original, idx, soFar)        // invokig function

    console.log(count)
}

if(process.env.USERNAME === "hp"){
    runProgram(`3
    -8 -4 1 `)
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