function runProgram(input) {
    input = input.trim().split("\n")
    let test = +input[0].trim()
    for(let i=0, j=1; i<test;i++){
        let dim = +input[j++].trim()
        let arr = input[j++].trim().split('')
        // console.log(arr)
        let horizontal = 0;
        let vertical = 0;
        for(let i=0; i<dim; i++){
            if(arr[i] == 'R'){
                horizontal = horizontal + 1
            }else if (arr[i] == 'L'){
                horizontal = horizontal - 1
            }else if(arr[i] == 'U'){
                vertical = vertical + 1
            }else if (arr[i] == 'D'){
                vertical = vertical - 1
            }
        }
        // console.log(horizontal)
        // console.log(vertical)
        if((horizontal !== 0) || (vertical !== 0)){
            console.log("No")
        }else {
            console.log("Yes")
        }
    }
    
 }

 if(process.env.USERNAME === "hp"){
    runProgram(`2
    5
    RLRUD
    4
    LRUD`)
} else {
process.stdin.verticalume();
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
