function runProgram(input){
    // Write code here
    input = input.trim().split('\n')
    let n = +input.shift()
    let arr = input[0].trim().split(' ').map(Number)
    // console.log(arr)
    let times = 0;
    let num = null;
    let max = 0;
    let flag = false;
    for (var i=0; i<arr.length; i++){
        if(flag){
            if(arr[i] === num){         
                times++
                continue
            }
            else {                      
                flag = false                
                if(times > max){
                    max = times
                }
            }
        }
        if(arr[i] % 2 === 1){           
            num = arr[i]
            times = 1
            flag = true
        }
    }
    if(times > max) {                      
        max = times
    }
    console.log(max)
}

if(process.env.USERNAME === "hp"){
    runProgram(`12
    1 1 1 1 2 2 2 2 2 1 1 1`)
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