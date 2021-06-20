// find prime number
function runProgram(input){
    // Write code here
  input = input.trim().split('\n')
  let n = +input.shift()
  for(let i=0; i<n; i++){
      let num = +input[i].trim()
      let isPrime = true
      if(num === 1){
          isPrime = false
      } else if (num > 1){
          for(let j=2; j<=num**0.5; j++){
              if(num % j == 0){
                  isPrime = false
                  break
              }
          }
      }
        console.log(isPrime ? "Yes" : "No")
  }

}

if(process.env.USERNAME === "hp"){
    runProgram(`4
    1
    2
    3
    4`)
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