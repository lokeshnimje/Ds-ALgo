
function runProgram(input) {
	// Write code here
    input = input.trim().split("\n")
    let test = +input[0].trim()
    for(let i=0, j=1;i<test;i++){
      let n = +input[j++]
      let arr = input[j++].trim().split(" ")
      for(let k=0; k<n-1; k++){
          let temp = ""
          for(let m=k+1; m<n; m++){
              if(arr[k] == arr[m]){
                  break
                } else {
                    temp += arr[m]
              }
          }
          console.log(temp)
      }   
    }
}

if(process.env.USERNAME === "hp"){
    runProgram(`3
    8
    1 2 1 3 2 7 4 2
    5
    1 2 1 3 4
    4
    1 2 2 1`)
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