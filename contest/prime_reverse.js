// find given number and their reverse both is prime or not.
function runProgram(input){
    // Write code here
    input = input.trim().split('\n')
    let test = +input[0].trim()
    for(let i=1; i<=test; i++){
        let num = input[i].trim()
        let arr = num.split('')
        let revNum = arr.reverse().join('')
        // console.log(revNum)
        if(isPrime(Number(num)) && isPrime(Number(revNum))){
            console.log("Yes")
        }else {
            console.log("No")
        }
    }
    function isPrime(num){
        let  count = 0
        if(num <= 1){
            return false
        }
        if(num == 2){
            return true
        }
        for(let i=2; i<=num**0.5; i++){
            if(num % i == 0){
                count++
                console.log(num, i)
            }
        }
        if(count >= 1){
            return false
        }
         return true
    }
    // console.log(isPrime(16))
  
}

if(process.env.USERNAME === "hp"){
    runProgram(`2
    151
    10`)
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