// find two string are equal or not?
function runProgram(input){
    // Write code here
    input = input.trim().split("\n")
    // console.log(input)
    let test = +input[0]
    for(let i=0,j=1;i<test;i++){
        let n = +input[j++].trim()
        let arr1=input[j++].trim().split("").sort().join("")
        let arr2=input[j++].trim().split("").sort().join("")
        console.log(arr1 == arr2 ? "Yes" : "No")
    }
}

if(process.env.USERNAME === "hp"){
    runProgram(`2
    2
    ab
    ac
    3
    aba
    aab`)
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