function runProgram(input){
    // Write code here
    input = input.trim().split("\n")
    let s1 = input[0].trim().split('');
    let s2 = input[1].trim().split('');
    // console.log(s1, s2)
    let arr = ""
    for(let k=0; k<s1.length; k++){
        arr += s1[k] + s2[k]
    }
    console.log(arr)

    let obj = {}
    for(let i=0; i<arr.length; i++){
       let elem = arr[i];
       if (obj[elem] === undefined){
           obj[elem] = 1
       }else {
           obj[elem] = obj[elem] + 1
       }
    }
    console.log(obj)
    let count = 0
    for(key in obj){        // key = g, h & value = 10, 8
        if(obj[key] < 2){
            count++
        }
    }
    if(count){
        console.log("No")
    } else {
        console.log("Yes")
    }
}

if(process.env.USERNAME === "hp"){
    runProgram(`gggggjjjj
    jjjjggggg`)
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