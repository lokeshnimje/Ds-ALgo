function runProgram(input){
    // Write code here
  input = input.trim().split('\n')
  let dim = +input.shift()

  for(let i=0; i<dim; i++){
      console.log(input[i].trim().split(' ').reverse().join(' '))
  }
}

if(process.env.USERNAME === "hp"){
    runProgram(`4
    1 2 3 4
    1 2 3 4
    1 2 3 4
    1 2 3 4`)
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
