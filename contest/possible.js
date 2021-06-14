function runProgram(input){
    // Write code here
    input = input.trim().split("\n")
    let test = +input[0].trim()
    for(let i=0, j=1; i < test; i++){
        let [a,b] = input[j++].trim().split(" ").map(Number)
        // console.log(a,b)
        if(findPossibility(a,b)){
            console.log("Possible")
        }
        else{
            console.log("Not Possible")
        }
        function findPossibility(a,b){
            if(a == b){
                return true
            }
            else if(a > b){
                return false
            }
             return findPossibility(a*2,b) || findPossibility(a*10+1,b)
        }
    }
}

if(process.env.USERNAME === "hp"){
    runProgram(`4
    6 242
    3 3
    6 3
    10 30`)
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