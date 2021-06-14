function runProgram(input){
    // Write code here
    input = input.trim().split('\n')
    let n = +input[0].trim()
    let arr = []
    for(let j=1; j<=n; j++){
        arr = input[j].trim().split('')
        // console.log(arr)
        let vow = []
        let cons = []
        for(let i=0; i<arr.length; i++){
            if(arr[i] === "A" || arr[i] === "E" || arr[i] === "I" || arr[i] === "O" || arr[i] === "U" || 
            arr[i] === "a" || arr[i] === "e" || arr[i] === "i" || arr[i] === "o" || arr[i] === "u" ){
                vow.push(arr[i])
            }else {
                cons.push(arr[i])
            }
        }
        let vow1 = vow.join('')
        let con1 = cons.join('')
        console.log(vow1+con1)
    }
  
}

if(process.env.USERNAME === "hp"){
    runProgram(`4
    eio
    masaischool
    ubcdefghioel
    rhythm`)
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