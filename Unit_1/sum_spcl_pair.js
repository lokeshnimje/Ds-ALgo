// You are given an array A of N integers. Write a program to find the sum of the 
// absolute difference between all such pairs (A[i], A[j]) such that i < j and ( j-i ) 
// is prime.

function runProgram(input) {
    input = input.trim().split("\n");
    var n = Number(input.shift());
    var arr = input[0].trim().split(" ").map(Number);
    var sum = 0
    for(var i=0; i< arr.length; i++){
        for(var j=i+1; j<arr.length; j++){
            var val = Math.abs(arr[i] - arr[j])
            if(isPrime(j-i)){
                sum += val
            }
        }
    }
    console.log(sum) 
  }

  function  isPrime (num) {
      let count = 0
      for(let i=2; i<=num; i++){
          if(num%i === 0) count++
      }
      return count === 1
  }
  
  if (process.env.USERNAME === "LOKESH") {
    runProgram(`6
    1 2 3 5 7 12`);
  } else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read = "";
    process.stdin.on("data", function (input) {
      read += input;
    });
    process.stdin.on("end", function () {
      read = read.replace(/\n$/, "");
      runProgram(read);
    });
  
    process.on("SIGINT", function () {
      read = read.replace(/\n$/, "");
      runProgram(read);
      process.exit(0);
    });
  }
  