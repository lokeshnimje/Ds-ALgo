function runProgram(input) {
    input = input.trim().split("\n");
    //  console.log(input)
     var person = Number(input.shift())
    var weights = input[0].trim().split(' ')
    // console.log(weights)
    for (var i = 0; i < weights.length; i++){
        if((weights[i]) < 85){
            console.log("Enter")
        } else {
            console.log("Beep")
        }
    }
  

  }
  
  if (process.env.USERNAME === "LOKESH") {
    runProgram(`5
    24 83 89 43 91`);
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
  