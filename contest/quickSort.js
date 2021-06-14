function runProgram(input) {
    input = input.trim().split("\n");
    let n = +input[0].trim()
    var arr = input[1].trim().split(" ").map(Number);
    
    let high = n - 1;
    let low = 0;
    console.log(quick_Sort(arr, low, high).join(" "));
  }
  function quick_Sort(arr, low, high) {
    if (low < high) {
      var p = partitionArr(arr,low, high);
      quick_Sort(arr, low, p);
      quick_Sort(arr, p + 1, high);
    }
    return arr;
  }
  function partitionArr(arr, low, high) {
    let pivot = arr[low]
    let i=low;
    let j = high
    while(i < j){
        while(arr[i] <= pivot){
            i++
        }
        while(arr[j] > pivot){
            j--
        }
        if(i<j){
            let temp = arr[i]
            arr[i] = arr[j]
            arr[j] = temp
        }
    }
    let res = arr[low]
    arr[low] = arr[j]
    arr[j] = res
    return j
  }
  if (process.env.USERNAME === "hp") {
    runProgram(`5
    2 3 1 4 5`);
  } else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read = "";
    process.stdin.on("data", function (input) {
      read += input;
    });
    process.stdin.on("end", function () {
      read = read.replace(/\n$/, "");
      read = read.replace(/\n$/, "");
      runProgram(read);
    });
    process.on("SIGINT", function () {
      read = read.replace(/\n$/, "");
      runProgram(read);
      process.exit(0);
    });
  }