// find the largest value of X which has both positive and negative value.
function runProgram(input){
    // Write code here
  input = input.trim().split('\n')
  let test = input[0].trim()
  for(let i=0, j=1; i<test; i++){
    let n = input[j++].trim()
    let arr = input[j++].trim().split(' ').map(Number)
    arr = arr.sort((a,b) =>a-b)
    // console.log(arr)
    let max = arr[0]
    for(let i=1; i<n ; i++){
        if(arr[i] >= max && arr.join("").indexOf(-arr[i]) != -1){
            max = arr[i]
            // console.log(max, arr[i])
        }
    }
    if(max != 0){
        console.log(max)
    }else {
        console.log(-1)
    }
  }
}

if(process.env.USERNAME === "hp"){
    runProgram(`2
    5
    2 1 -1 -2 3
    6
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