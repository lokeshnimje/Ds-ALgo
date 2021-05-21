function runProgram(input) {
  input = input.trim().split("\n");
  //   console.log(input)
  var person = Number(input.shift());
  var checkin = input[0].trim().split(" ");
  var cabin = input[1].trim().split(" ");

  // console.log(checkin, cabin)
  for (var i = 0; i < person; i++) {
    if (Number(checkin[i]) <= 15 && Number(cabin[i]) <= 7) {
      console.log("Boarding");
    } else {
      console.log("Stop");
    }
  }
}

if (process.env.USERNAME === "LOKESH") {
  runProgram(`4
    12 14 15 6
    8 5 7 4`);
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
