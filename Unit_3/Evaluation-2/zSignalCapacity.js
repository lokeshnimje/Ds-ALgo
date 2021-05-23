function runProgram(input){
    // Write code here
    input = input.trim().split('\n')
    let test = +input[0].trim()
    for(let i=0, j=1; i<test; i++){
        let dim = +input[j++].trim()
        let arr = input[j++].trim().split(' ').map(Number)
        // console.log(arr)
        let res = []
        
        for(let i=0; i<dim; i++){
            let count = 0
            for(let j=i-1; j>=0; j--){
                // console.log(i + "  "+ j)
                if(arr[i] > arr[j]){
                    count++
                } else {
                    break
                }
            }
            res.push(count+1)
        }
        console.log(res.join(' '))
    }
  
}

if(process.env.USERNAME === "hp"){
    runProgram(`2
    7
    100 80 60 70 60 75 85
    5
    3 5 0 9 8`)
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