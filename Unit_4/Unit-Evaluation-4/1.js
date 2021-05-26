function runProgram(input){
    // Write code here
    input = input.trim().split('\n')
    let test = +input[0].trim()
    for(let i=0, j=1; i<test; i++){
        let [m,n] = input[j++].trim().split(' ').map(Number)
        let boys = input[j++].trim().split(' ').map(Number)
        let girls = input[j++].trim().split(' ').map(Number)

        let len = 0
        if(m>=n){
            len = m
        }else {
            len = n
        }
        boys.sort()
        girls.sort()
        for(let i=0; i<len; i++){
            if(boys.length > 0 && girls.length> 0){
                if(boys[0] > girls[0]){
                    boys.shift()
                    girls.shift()
                } else {
                    girls.shift()
                }
                // console.log(boys, girls)
            }
        }
        // console.log(boys.length)
        if(boys.length === 0){
            console.log("YES")
        } else {
            console.log("NO")
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