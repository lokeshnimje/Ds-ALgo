// You are given an array A of N integers along with a target integer. 
// Your task is to find out the number of pairs of integers present in the array 
// whose sum is equal to the target value.


function runProgram(input){
    // Write code here
     input = input.trim().split('\n') 
     var a = input[0].trim().split(' ')
     var num = Number(a[1])
     var inp =  Number(input.shift())     
     var arr = input[0].trim().split(' ')
     var count = 0
     for (var i=0; i<arr.length; i++){
         arr[i] = Number(arr[i])
        for(j=0; j<arr.length;j++){
            if((arr[i] + arr[j] === num) && (arr[i] !== arr[j]))
            {
                count++
            }
        }
     }
     console.log(count)
}

if(process.env.USERNAME === "LOKESH"){
    runProgram(`5 9
    3 0 6 2 7
    `)
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
