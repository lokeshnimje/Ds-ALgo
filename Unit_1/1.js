function runProgram(input) {
  var arr = input.trim().split(" ");
  for (var i = 0; i < arr.length; i++) {
    arr[i] = Number(arr[i]);
  }
  var sum = arr[0] + arr[1] * 2 + arr[2] * 3 + arr[3] * 4 + arr[4] * 6;
  console.log(sum);
}

if (process.env.USERNAME === "LOKESH") {
  runProgram("12 8 5 6 3");
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
