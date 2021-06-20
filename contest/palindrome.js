// is it possible to make palindrome of given string or not?
function runProgram(input){
    // Write code here
  input = input.trim().split('\n')
  let test= +input[0].trim()
  for(let i=0, j=1; i<test; i++){
      let n = +input[j++].trim()
      let arr = input[j++].trim().split('')
    //   console.log(arr)
    let obj = {}
    for(let i=0; i<n ;i++){
        let el = arr[i]
        obj[el] = obj[el] === undefined ? 1 : ++obj[el]
    }
    // console.log(obj)
    let odd = 0
    for(k in obj){
        if(obj[k] % 2 == 1){
            odd++
        }
    }
    if(odd > 1){
        console.log("Not Possible!")
    }else {
        console.log("Possible!")
    }
  }

}
if(process.env.USERNAME === "hp"){
    runProgram(`2
    6
    aabbcc
    5
    aabcd`)
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