// You are provided price of three different types of ticket: 1st Class, 2nd class and 3rd class.
// Also, you know the number of tickets of each type you need to book. Find total cost you need to pay.



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
  console.log(sum);
}

if (process.env.USERNAME === "LOKESH") {
  runProgram(`1200 1400 2000
   5 6 2`);
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
