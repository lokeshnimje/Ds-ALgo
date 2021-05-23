function runProgram(input){
    // Write code here
    input = input.trim().split(' ')
    let res  = ""
    for(let i=0; i<input.length; i++){
        res += input[i]
    }
    let arr = res.toLowerCase()
    // console.log(res.toLowerCase())
    let str = []
    // let char = "abcdefghijklmnopqrstuvwxyz"
    for(let i=0; i<arr.length; i++){
        if((/[a-z]/).test(arr[i])){
            str.push(arr[i])
        }
        // for(let j=0; j<char.length; j++){
        //     if(arr[i] == char[j]){
        //         str.push(arr[i])
        //     }
        // }
    }
    // console.log(str) 
    let flag = true
    for(let i=0, j=str.length-1; i<str.length, j>=0; i++, j--){
        if(str[i] !== str[j]){
            flag = false
            break
        }
    }
    if (flag){
        console.log("YES")
    } else {
        console.log("NO")
    }
}

if(process.env.USERNAME === "hp"){
    runProgram(`vtmtmv`)
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