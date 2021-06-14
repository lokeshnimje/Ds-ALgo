function runProgram(input){
    // Write code here
  input = input.trim().split('\n')
  let test  = +input[0].trim()
  for (let i=0, j=1; i<test; i++){
      let current = input[j++].trim().split(".").map(Number)
      let updated = input[j++].trim().split(".").map(Number)
      let flag = true
      for (let k=0; k<current.length; k++) {
          if (current[k] > updated[k]) {
              flag  = false
              break
          }else if (current[k] < updated[k]){
             flag = true
             break
          }
      }
      if (flag) {
          console.log("True")
      }else{
          console.log("False")
      }
  }


}
if(process.env.USERNAME === "hp"){
    runProgram(`3
    2.0.1
    1.9.8
    12.0.1
    12.10.0
    1.1.10
    1.1.12`)
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