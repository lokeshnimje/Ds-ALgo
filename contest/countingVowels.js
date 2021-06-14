//Enter code here
function runProgram(input){
    // Write code here
  input = input.trim().split('\n')
    let test = +input[0].trim()
    for(let i=0, j=1; i<test; i++){
       let n = +input[j++].trim()
       let str = input[j++].trim().split('')
       let obj={'a':0,'e':0,'i':0,'o':0,'u':0}
    //   console.log(str)
      for(let k=0;k<str.length;k++){
        let el = str[k]
        if(obj[el] === 0){
            obj[el] = 1
        }else {
            obj[el]++
        }
      }
    //   console.log(obj)
	  let res =  ""
      for(l in obj){
        res += obj[l] + " "
      }
      console.log(res)
    }                                     
}

if(process.env.USERNAME === "hp"){
    runProgram(`2
5
aeiou
6
aaeiou`)
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