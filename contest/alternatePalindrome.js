// find palindrome of array.
function runProgram(input){
    // Write code here
    input = input.trim().split("\n")
    let test = +input[0].trim()
    for (let i=0, j=1; i<test; i++){
        let n = +input[j++].trim()
        let arr = input[j++].trim().split("")
        // console.log(arr)
        let obj = {}
        if(arr.length == 1){
            console.log("Yes")
        } else {
            for(let i=0; i<arr.length; i++){
                let el = arr[i]
                obj[el] = obj[el] == undefined ? 1 : ++obj[el]
            }
            // console.log(obj)
            let unique = 0
            let nonUnique = 0
            for(key in obj){
                if(obj[key] % 2 == 1){
                    if(obj[key] == 1){
                        unique++
                    } else {
                        nonUnique++
                    }
                }
            }
            // console.log(unique, nonUnique)
            if(unique == 1 && nonUnique == 0){
                console.log("Yes")
            } else if(unique > 1){
                console.log("No")
            } else if (unique >= 0 && nonUnique > 0){
                console.log("No")
            } else {
                console.log("Yes")
            }
        }
    }   
}

if(process.env.USERNAME === "hp"){
    runProgram(`3
    1
    a
    4
    aabc
    6
    abbbef`)
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