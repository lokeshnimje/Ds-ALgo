// Given an array, A, of N integers, print the smallest and largest element present in the array




function runProgram(input){
    // Write code here
     input = input.trim().split('\n') 
     var inp =  Number(input.shift())     
     var num = input[0].trim().split(' ')
    //  console.log(num)
     var low = num[0]
     for(var i=0; i<num.length; i++){
         num[i] = Number(num[i])
         if(num[i] < low){
             low = num[i]
         } 
     }
     var high = num[0]
     for(var i=0; i<num.length; i++){
         num[i] = Number(num[i])
         if(num[i] > high){
             high = num[i]
         } 
     }

     console.log(low)
     console.log(high)
}

if(process.env.USERNAME === "LOKESH"){
    runProgram(`4
    -2 0 8 4`)
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
