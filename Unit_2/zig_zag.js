function runProgram(input){
    // Write code here
     input = input.trim().split('\n')
     let [r, c] = input[0].trim().split(' ').map(Number)
     
     let res = ""
     for (var i=1; i<input.length; i++){
        let row = input[i].trim()
        res += (i % 2 === 1 ? row.split(' ').reverse().join(' ') : row ) + " "
       
     }
     console.log(res.trim())
}

if(process.env.USERNAME === "hp"){
    runProgram(`5 5
    4 7 1 1 7
    8 9 9 6 1
    6 4 9 5 1
    7 7 4 7 7
    8 6 2 5 5`)
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