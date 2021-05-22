function runProgram(input){
    // Write code here
    let str = input.trim()

    let max = 0
    for(let i=0; i<str.length; i++){
        let temp = ""
        for(let j=i; j<str.length; j++){
            temp += str[j]
            // console.log(temp)
            if(str[i] === str[j]){
                if (checkPalin(temp)){
                    if(max < len){
                       max = len
                    }
                }
            }
        }
    }
    console.log(max)
    function checkPalin(val){
        len = val.length;
        let flag = true
        for(let i=0, j=len-1; i<len, j>=0; i++, j--){
            if(val[i] !== val[j]){
                // console.log("No")
                flag = false
                break
            }
        }
        if(flag == true){
            return len
        }
    }
}

if(process.env.USERNAME === "hp"){
    runProgram(`thisracecarisgood`)
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