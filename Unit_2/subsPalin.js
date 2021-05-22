function runProgram(input){
    // Write code here
    var data = input.trim()
    var max_len =0
    for (var i = 0; i< data.length; i++){
       for(let j=i+1; j<data.length; j++){
           let temp = data.substring(i, j)
           console.log(temp)
           if(isPalin(temp)){
               if(max_len < temp.length){
                   max_len = temp.length
               }
           }
       }
    }
    // console.log(max_len);
}
function isPalin(str){
    for(let i=0, j=str.length-1; i<str.length; i++, j--){
        if(str[i] !== str[j]){
            return false
        }
    }
    return true
}

if(process.env.USERNAME === "hp"){
    runProgram('thisracecarisgood')
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