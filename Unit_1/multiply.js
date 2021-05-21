function runProgram(input){
    // Write code here
     input = input.trim().split('\n')  
     var int = Number(input.shift())
     var arr = input[0].trim().split(' ')
    //  console.log(arr)
    var res = 1
     for (var i = 0;  i < arr.length; i++){
         arr[i] = Number(arr[i])
         res = res * arr[i]
     }
    console.log(res)
}     

     if(process.env.USERNAME === "LOKESH"){
        runProgram(`5
        3 5 2 9 4`)
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
   