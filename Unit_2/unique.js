function runProgram(input){
    // Write code here
    let arr = input.trim().split('')
    let obj ={}
    for(let i=0; i<arr.length; i++){
        let elem = input[i];
       obj[elem] = obj[elem] === undefined ? 1 : ++obj[elem];
    }
    // console.log(obj)
    let flag = false
    for(key in obj){
        if(obj[key] === 1){
            console.log(key);
            flag = true
            break
        }
    }
    if(!flag) {
        console.log("Not Found")
    }
}

if(process.env.USERNAME === "hp"){
    runProgram(`racecars`)
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