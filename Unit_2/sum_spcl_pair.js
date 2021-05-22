function runProgram(input){
    // // Write code here
    input = input.trim().split('\n')
    let n = +input.shift() 
    let arr = input[0].trim().split(' ').map(Number)
    // console.log(arr)
    let sum = 0
    val = 0
    for(let i=0; i<arr.length-1; i++){
        for(let j=i+1; j<arr.length; j++){
            val = Math.abs(arr[i] - arr[j])
            if(isPrime(j-i)){
               sum += val
            }
        }
    }
    console.log(sum)
    function isPrime(num){
        let count = 0
        for(let k=2; k<=num; k++){
            if(num % k === 0){
                count++
            }
        } 
        return (count === 1 ? true : false)
    }
    //Optimized way of finding prime no
    
    // function isPrime(n) {
    //     if (n < 2) return false;
    //     if (n == 2) return true;
      
    //     for (let l = 2; l <= Math.sqrt(n); l++) {
    //       if (n % l == 0) {
    //         return false;
    //       }
    //     }
    //     return true;
    //   }
      
    //   console.log(isPrime(2));
}

if(process.env.USERNAME === "hp"){
    runProgram(`6
    1 2 3 5 7 12`)
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