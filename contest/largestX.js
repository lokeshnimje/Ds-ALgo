// find the largest value of X which has both positive and negative value.
function runProgram(input) {
	// Write code here
    input = input.trim().split("\n");
    let tests = Number(input[0].trim());
    for (let i = 0, j=1; i < tests; i++) {
      let n = Number(input[j++].trim());
      let arr = input[j++].trim().split(" ").map(Number)
      largestX(arr, n);
    }
  }
  function largestX(nums, n) {
    nums.sort((a, b) => b - a);
    let flag = false;
    for (let i = 0; i < n; i++) {
      if (nums[i] > 0) {
        val = nums[i];
        for (let j = n - 1; j >= 0; j--) {
          if (nums[j] >= 0) {
            if (val === nums[j]) {
              console.log(-1);
              return;
            }
            break;
          }
          if (val === -nums[j]) {
            console.log(val);
            flag = true;
            return;
          }
        }
      } else if (nums[i] > 0 && !flag) {
        val = nums[i];
        for (let j = n - 1; j >= 0; j--) {
          if (nums[i] === val && nums.length === 2) {
            console.log(-1);
            return;
          }
        }
      } else if (!flag) {
        console.log(-1);
        break;
      }
    }
 
}

if(process.env.USERNAME === "hp"){
    runProgram(`2
    5
    2 1 -1 -2 3
    5
    -3 2 -4 4 -2`)
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