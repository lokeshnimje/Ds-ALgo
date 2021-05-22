function runProgram(input){
    // Write code here
  input = input.trim().split('\n')
  let [l, w] = input[0].trim().split(' ').map(Number)
  let [user_l, user_w] = input[1].trim().split(' ').map(Number)
//   console.log(l,w,user_l, user_w)
    if(user_l > l && user_w > w){
        console.log("Upload")
    } else if(user_l <= l && user_w > w){
        console.log("Increase Length")
    } else {
        console.log("Increase Width")
    }
}

if(process.env.USERNAME === "hp"){
    runProgram(`12 14
    8 19`)
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