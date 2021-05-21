// You are given a number N. Let us say the floor ( Ref:https://en.wikipedia.org/wiki/Floor_and_ceiling_functions) of 32 divided by N is x
// Print as per following rules
// * In case x is 0, print "Too Low"
// * In case it is not possible to generate a valid number, print -1
// * In all other cases, print x

function runProgram(input) {
    var num = Number(input)
    if(isNaN(num) || num === 0){
      console.log("-1")
      return
    }
    var res = Number(((32 / num )+ '').split('.')[0])
    console.log(res === 0 ? "Too Low" : res)
  }
  
  if (process.env.USERNAME === "LOKESH") {
    runProgram('4');
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
  