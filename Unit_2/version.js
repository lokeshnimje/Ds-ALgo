function runProgram(input){
    // Write code here
    input = input.trim().split('\n')
    let num1 = input[0].trim().split('.').map(Number)
    let num2 = input[1].trim().split('.').map(Number)
    // console.log(num1, num2)

    let len1 = num1.length;
    let len2 = num2.length;
    let dim = 0;         // this could be 4 as mentioned in ques: a.b.c.d
    (len1 > len2) ? dim = len1 : dim = len2;
    // console.log(dim)

    for(let i=0; i<dim; i++){
        let flag = true
        // console.log(num1[i], num2[i])
        if((num1[i] > num2[i]) || (num2[i] === undefined)){
            console.log("Version 2 is the latest.")
            flag = false
            return;
        } else if((num1[i] < num2[i]) || (num1[i] === undefined)){
            console.log("Version 1 is the latest.")
            flag = false
            return;
        } 
    }

    if(flag = true){
        console.log("Both Versions are equal.")
    }
}

if(process.env.USERNAME === "hp"){
    runProgram(`2.1.11.2
    2.1.11`)
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