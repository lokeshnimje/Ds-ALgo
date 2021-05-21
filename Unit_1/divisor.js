function runProgram(input){
    // Write code here
    input = input.trim().split('\n')  
    var arr = input[0].trim().split(' ')
    var l = Number(arr[0])
    var r = Number(arr[1])
    var k = Number(arr[2])
    var count = 0
    for(var i = l; i <= r; i++){
        if (i % k === 0){
            count++
        }
    } 
    console.log(count)    
}     

     if(process.env.USERNAME === "LOKESH"){
        runProgram(`1 10 1`)
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
   