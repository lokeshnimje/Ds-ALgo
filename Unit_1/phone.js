// You are given prices of 4 different mobile phones and also provided with the number of each of the phones that you need to buy.
// You have with you 150000 units of money. Comment if it is possible to buy those phones or not.




function runProgram(input) {
    input = input.trim().split("\n");
    // console.log(input)
  
    var arr1 = input[0].trim().split(" ");
    var arr2 = input[1].trim().split(" ");
    var sum = 0;
    for (var i = 0; i < arr1.length; i++) {
      arr1[i] = Number(arr1[i]);
      for (var j = 0; j < arr2.length; j++) {
        arr2[j] = Number(arr2[j]);
        if (i == j) {
          sum += arr1[i] * arr2[j];
        }
      }
    }
    var max = 150000
    if(sum <= max){
        console.log("Possible")
    } else {
        console.log("Not Possible")
    }
  }
  
  if (process.env.USERNAME === "LOKESH") {
    runProgram(`10000 20000 15000 5000
    2 3 4 3`);
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
  