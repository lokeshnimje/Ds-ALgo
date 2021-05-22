function runProgram(input){
    // Write code here
    input = input.trim().split('\n')
    let str1 = input[0].trim().split(' ').join('').split('').sort()
    let str2 = input[1].trim().split(' ').join('').split('').sort()
    // console.log(str1+" - "+ str2)
    let len = 0
    if(str1.length !== str2.length){
        console.log("False")
        return
    } else {
        len = str1.length
    }
    // console.log(len)
    let obj1 = {}
    let obj2 = {}

    for(i=0; i<len; i++){
        let el1 = str1[i]
        let el2 = str2[i]
        obj1[el1] = obj1[el1] === undefined ? 1 : ++obj1[el1];
        obj2[el2] = obj2[el2] === undefined ? 1 : ++obj2[el2]

    }
    // console.log(obj1, obj2)
    if(JSON.stringify(obj1) == JSON.stringify(obj2)){
        console.log("True")
    } else {
        console.log("False")
    }
}

if(process.env.USERNAME === "hp"){
    runProgram(`anagram
    nag a ram`)
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