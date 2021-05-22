function runProgram(input){
    // Write code here
    //every element is unique
    let data = input.trim()
    let count =0
    for (let i = 0; i< data.length; i++){
        let res = ""
       for(let j=i; j<data.length; j++){
           res += data[j]
        //    console.log(res)
           if (isUnique(res)){
               count++
           }
       }
    }
    console.log(count)
    
    function isUnique(str){
        let obj ={}
    
        for(let i=0; i<str.length; i++){
            if (str[i] in obj){
                    return false
                } else {
                    obj[str[i]] = 1
            }
        }
        return true
    }
}

if(process.env.USERNAME === "hp"){
    runProgram('aaaba')
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