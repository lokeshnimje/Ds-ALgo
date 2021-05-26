function runProgram(input){
    // Write code here
    input = input.trim().split("\n")
    let m = 0
    let n = 0
    let boys = []
    let girls = []
    for(let i = 2; i < input.length; i++){
        if(m === 0){
            boys = input[i].split(" ").map(Number).sort((a,b) => a-b)
            m++
        } else if(n === 0){
            girls = input[i].split(" ").map(Number).sort((a,b) => a-b)
            n++
        } else {
            m = 0
            n = 0
        }
        if(m !== 0 && n !== 0){
            const findPairs = (boys, girls) => {
                if(boys.length === 0){
                    console.log("YES")
                    return
                }
                if(boys[0] > girls[0]){
                    boys.shift()
                    girls.shift()
                } else {
                    console.log("NO")
                    return
                }
              return findPairs(boys, girls)
            
        }
        findPairs(boys, girls)
        }
    }
  
}

if(process.env.USERNAME === "hp"){
    runProgram(`1
    4 5
    2 5 6 8
    3 8 5 1 7`)
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