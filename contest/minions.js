function runProgram(input){
    // Write code here
  input = input.trim().split('\n')
  let n = +input.shift()
  let str = input[0].trim().split('')
//   console.log(str)
minions(str)
  function minions(str){
      let stack = []
      stack.push(str[0])
    for(let i=1; i<str.length; i++){
       if(str[i] == stack[stack.length-1]){
           stack.pop()
       }else {
           stack.push(str[i])
       }
    }
    // console.log(stack.join(''))
    if(stack.length > 0){
        console.log(stack.join(''))
    } else {
        console.log(-1)
    }
  }
}
// time complexity is O(n)
if(process.env.USERNAME === "hp"){
    runProgram(`2
    aa`)
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