// You are given 2 arrays of N integers. Your task is to write a program that
//  finds the one integer which is common in both arrays.

// Note: There is always one integer common in both arrays.


function runProgram(input) {
    input = input.trim().split("\n");
    //   console.log(input)
    var n = Number(input.shift());
    var arr_1 = input[0].trim().split(" ");
    var arr_2 = input[1].trim().split(" ");
  
    for(var i=0; i<arr_1.length; i++){
        for( var j=0; j< arr_2.length; j++){
            if(arr_1[i] === arr_2[j]){
                console.log(arr_1[i])
            }
        }
    }
   
  }
  
  if (process.env.USERNAME === "LOKESH") {
    runProgram(`3
    4 5 7
    9 2 5`);
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
  