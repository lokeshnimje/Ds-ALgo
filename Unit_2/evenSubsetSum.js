// Given an array a which contains n integers in it.
//  Find out if there exists a subset of the array such that the 
//  sum of its elements is even.
function runProgram(input){
    // Write code here
    input = input.trim().split('\n')
    let test = +input[0].trim()

    for(let i=0, j=1; i<test; i++){
        let len = +input[j++]
        
        let arr = input[j++].trim().split(' ')
        for(let k=0; k<len; k++){
            arr[k] = Number(arr[k])
        }
        // console.log(arr.length)
        if(arr.length < 2){
            console.log("No")
        } else {
             let sum = arr.reduce(function(a, c){
                return a+c
            }, 0)
            // console.log(sum)
            let count = 0
            for (let i=0; i<len; i++){
                let temp = sum - arr[i]
                if(temp % 2 === 0){
                    count++
                }
            }
            if(count > 0){
                console.log("Yes")
            } else {
                console.log("No")
            }       
        }   
    }   
}
if(process.env.USERNAME === "hp"){
    runProgram(`2
    1
    5
    4
    1 2 3 4`)
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