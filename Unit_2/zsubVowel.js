function runProgram(input){
    // Write code here
    let arr = input.trim().split('')

    let flag = false
    let res = ""
    let count = 0
    for(let i=0, j=arr.length-1; i<arr.length, j>=0; i++, j--){
        if((arr[i] == "a") || (arr[i] == "e") || (arr[i] == "i") ||
            (arr[i] == "o") || (arr[i] == "u")){
                flag = true
                count++;
        }
        if((arr[j] == "a") || (arr[j] == "e") || (arr[j] == "i") ||
            (arr[j] == "o") || (arr[j] == "u")){
            // res += arr[j]
            flag = true
            count++
        }
        // if(((arr[i+1] == "a") || (arr[i+1] == "e") || (arr[i+1] == "i") ||
        //    (arr[i+1] == "o") || (arr[i+1] == "u"))){
        //         count++
        //         flag = true
        // }
        // if((arr[j-1] == "a") || (arr[j-1] == "e") || (arr[j-1] == "i") ||
        //     (arr[j-1] == "o") || (arr[j-1] == "u")){
        //     flag = true
        //     count++
        // } 


        if(flag) {
            // res += arr[j]
        } 
    }
    console.log(count)
}

if(process.env.USERNAME === "hp"){
    runProgram(`dangerouscovid`)
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