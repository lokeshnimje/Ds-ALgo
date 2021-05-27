function runProgram(input){
    // Write code here
    input = input.trim().split('\n')
    let test = +input[0].trim()
    // console.log(test)

    for(let i=0, j=1; i<test; i++){
        let N = +input[j++].trim() 
        // console.log(N)
        function hack(c, N){
            if(c === N){
                return true
            } else if (c > N){
                return false
            } else 
            if(hack(c*10, N)){
                return true
            } else
            if(hack(c*20, N)){
                return true
            } else {
                return false   
            }     
        }
        console.log(hack(1,N) ? "Yes" : "No")
    }
    // we can also solve this by using while loop, divide N/10 and N/20 till === 1
    // while(q is not empty){
        // num = q[0]
        // q.shift()   // shift after every iteration
        // if(num==1)
        // flag = true
        // break
        // if(num % 10 == 0){
        //     push (num/10)
        // }
        // if(num % 20 == 0){
        //     push (num/20)
        // }
    // }
    // time complexity for this approach : (2 to power (log N base 10)) => O(1)
}
if(process.env.USERNAME === "hp"){
    runProgram(`5
    1  
    2
    10
    25
    200`)
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