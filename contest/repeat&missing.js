function runProgram(input){
    // Write code here
    input = input.trim().split("\n")
    let test = +input[0].trim()
    for (let i=0, j=1; i<test ; i++){
        let obj = {}
        let high = 0
        let empty = 0
        let dim = +input[j++].trim()
        let arr = input[j++].trim().split(" ").map(Number)
        for (let k=0; k<dim; k++){
            obj[k+1] = 0
            let el = arr[k]
            obj[el]++
        }
        // console.log(obj)
       
        for (key in obj){
            if(obj[key] < 1){
                empty = key
            }
            else if(obj[key] > 1){
                high = key
            }
        }
        console.log(empty + " "+ high)
    }
}

if(process.env.USERNAME === "hp"){
    runProgram(`3
    5
    1 2 3 3 4
    2
    1 1
    3
    1 2 2`)
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