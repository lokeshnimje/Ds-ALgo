function runProgram(input){
    // Write code here
    input = input.trim().split('\n')
    let n = +input[0].trim()
    let original = input[1].trim().split(' ')
    let len = original.length
    let idx = 0
    let soFar = []
    // console.log(original, len, idx, soFar)

    function subSeq(original, idx, soFar){
        if(idx == len){
            console.log(soFar)
            return 
        }
        soFar.push(original[idx])

        subSeq(original, idx+1, soFar)
        
        soFar.pop()

        subSeq(original, idx+1, soFar)
    }

    subSeq(original, idx, soFar)



    // let result = []
    // function subSeq(str, ind, len){
    //     // console.log(ind, len)
    //     let res = ""
    //     for(let i=ind; i<len; i++){
    //         res += str[i]
    //         // console.log(res)
    //         result.push(res)
    //     }
    //     if(ind === len){
    //         return result
    //     } else {
    //         return subSeq(str, ind+1, len)
    //     }
    // }

    // let arr = subSeq(original, idx, len)
    // console.log(arr.join('\n'))

}

if(process.env.USERNAME === "hp"){
    runProgram(`3
    1 2 3`)
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