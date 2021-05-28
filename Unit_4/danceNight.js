function runProgram(input){
    // Write code here
    input = input.trim().split('\n')
    let test = +input[0].trim()

    for(let i=0, j=1; i<test; i++){
        let [m,n] = input[j++].trim().split(' ').map(Number)
        let boys = input[j++].trim().split(' ').map(Number).sort((a,b) => b-a)
        let girls = input[j++].trim().split(' ').map(Number).sort((a,b) => b-a)
        let len = girls.length
        // console.log(boys, girls)
        for(let i=0; i<len; i++){
            if(boys[0] > girls[0]){
                boys.shift()
                girls.shift()
            } else {
                girls.shift()
            }
        }
    //    console.log(boys, girls)
        if(boys.length == 0){
            console.log("YES")
        } else {
            console.log("NO")
        }
    }
}

if(process.env.USERNAME === "hp"){
    runProgram(`1
    5 5
    2 5 6 8 6
    3 8 5 1 7 `)
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