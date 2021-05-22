function runProgram(input){
    // Write code here
    input = input.trim().split('\n')
    let [p1, c1, m1] = input[0].trim().split(' ').map(Number)
    let [p2, c2, m2] = input[1].trim().split(' ').map(Number)
    // console.log(p1,c1,m1,p2,c2,m2)
    sum1 = p1+c1+m1
    sum2 = p2+c2+m2
    // console.log(sum1, sum2)

    if(sum1 > sum2){
        console.log("First")
    }else if(sum2 > sum1){
        console.log("Second")
    } else if (sum1 == sum2){
        if(m1 > m2){
            console.log("First")
        } else if (m2 > m1){
            console.log("Second")
        } else if(sum1 == sum2 && m1 == m2){
            if(p1 > p2){
                console.log("First")
            } else if (p2 > p1) {
                console.log("Second")
            }
        }
    }
}

if(process.env.USERNAME === "hp"){
    runProgram(`1 11 1
    2 10 1`)
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