function runProgram(input) {
	// Write code here
    input = input.trim().split("\n")
    let n=+input[0]
    let a = input[1].trim().split(" ").map(Number)
    console.log(mergeSort(a).join(" ")) 
}
function mergingArrays(left, right){
    const final_sorted = []
    while (left.length && right.length) {
      final_sorted.push(left[0] > right[0] ? right.shift() : left.shift())
    }
    while (left.length) {
      final_sorted.push(left.shift())
    }
    while (right.length) {
      final_sorted.push(right.shift())
    }
    return final_sorted
  }
  
  const mergeSort = (a) => {
    if (a.length < 2) return a
    const middle = Math.floor(a.length / 2)
    const a_left = a.slice(0, middle)
    const a_right = a.slice(middle, a.length)
    const sorted_left = mergeSort(a_left)
    const sorted_right = mergeSort(a_right)
    return mergingArrays(sorted_left, sorted_right)
  }

if(process.env.USERNAME === "hp"){
    runProgram(`5
    3 5 0 9 8`)
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