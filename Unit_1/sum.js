function runProgram(input){
    // Write code here
     input = input.trim().split('\n') 
     var a = Number(input.shift());
     var arr = input[0].trim().split(" ").map(Number);   
     var odd = arr.filter(function(e){
         return e % 2 == 1
     })
     var even = arr.filter(function(e){
        return e % 2 == 0
    })
     
     var sum_odd = 0
     for (var i = 0;  i < odd.length; i++){
         sum_odd += odd[i]
     }
     var sum_even = 0
     for (var i = 0;  i < even.length; i++){
         sum_even += even[i]
     }
     if(sum_odd > sum_even){
         console.log("Odd")
     } else {
         console.log("Even")
     }
}

if(process.env.USERNAME === "LOKESH"){
    runProgram(`4
    1 2 3 4`)
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