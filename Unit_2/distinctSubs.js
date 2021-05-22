function runProgram(input){
    // Write code here
   
    let str = input.trim();
    //console.log(str)
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        let res = ""
      for (let j = i; j < str.length; j++) {
          res += str[j]
        if (isUnique(res) === undefined) {
           count++
        }
      }
    }
    console.log(count);

    function isUnique(res){
        let flag = true
        for(let i=1; i<res.length; i++){
            if(res[0] === res[i]){
                // return flag
            } else {
                return false
            }
        }
    }
}

if(process.env.USERNAME === "hp"){
    runProgram('aaaba')
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