function runProgram(input){
    // Write code here
    input = input.trim().split('\n')
    let n = +input.shift()
    let arr1 = input[0].trim().split(' ').map(Number)
    let arr2 = input[1].trim().split(' ').map(Number)
    let i=0,j=0,k=0
    let len1 = arr1.length
    let len2 = arr2.length
    let res = []
    while(i<len1 && j<len2){
        if(arr1[i] < arr2[j]){
            res[k++] = arr1[i++]
        } else {
            res[k++] = arr2[j++]
        }
    }
    while (i<len1){
        res[k++] = arr1[i++]
    }
    while (j<len2){
        res[k++] = arr2[j++]
    }
    console.log(res.join(' '))
}

if(process.env.USERNAME === "hp"){
    runProgram(`4
    1 5 7 9
    2 4 6 8`)
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