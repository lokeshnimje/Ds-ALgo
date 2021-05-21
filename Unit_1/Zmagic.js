// You are given a numbern. A number is said to be magical if it contains magic digits 4 and 7 only.For example 77,47,74,474 are magical and 5,467,17 are not.

// The number isalmostmagicalifit is divisible by one of the magic numbers.

// print "YES" (without the quotes), if number n is almost lucky. Otherwise, print "NO" (without the quotes).



function runProgram(input){
    // Write code here
    var arr = input;
    if ((Number(arr) % 4 === 0) || (Number(arr) % 7 === 0)){
        console.log("YES")
    } else {
        var count = 0
        for (var i=0; i<arr.length; i++){
            arr[i] = Number(arr[i])
            if ((arr[i] === 4) || (arr[i] === 7)){
                console.log("lokesh")
                count++
            }
        }  
         if (count !== 0){
             console.log("YES")
         } else {
             console.log("NO")
         }
    }    
}

if(process.env.USERNAME === "LOKESH"){
    runProgram(`47`)
} else {
process.stdin.resume();
process.stdin.setEncoding("ascii");
let read = "";
process.stdin.on("data", function (arr) {
    read += arr;
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
