function runProgram(input){
    // Write code here
    let num = +input.trim()
    
    if((num % 4 === 0) || (num % 7 === 0 )){
        console.log("YES")
    } else {
        check(input) 
    } 
    // console.log(input)
    function check(input){
        let arr = input.trim().split('').map(Number)
        // console.log(arr)
        let count = 0
        for(let i=0; i<arr.length; i++){
            if((arr[i] == 4) || (arr[i] == 7)){
                count++
            } else {
                count = 0
            }
        }
        if(count === arr.length) {
            console.log("YES")
        } else {
            console.log("NO")
        }
    }
    
}

if(process.env.USERNAME === "hp"){
    runProgram(`47`)
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