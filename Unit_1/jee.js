function runProgram(input){
    // Write code here
    input = input.trim().split('\n') 
    var a = input[0].trim().split(' ');
    var b = input[1].trim().split(' ');
    
    var sum_a = 0;
    var sum_b = 0;
    for(var i = 0; i < a.length; i++){
        a[i] = Number(a[i])
        b[i] = Number(b[i])
        sum_a += a[i]
        sum_b += b[i]
    }
    if(sum_a > sum_b){
        console.log("First")
    } 
    else if(sum_b > sum_a){
        console.log("Second")
    }
    else{
        if (a[2] > b[2]) {
            console.log("First")
        } 
        else if(b[2] > a[2]){
            console.log("Second")
        }
        else if (a[2] == b[2]) {
            if (a[0] > b[0]) {
                console.log("First")
            }
            else if (a[0] < b[0]) {
                console.log("Second")
            }
        }
    }  
}

if(process.env.USERNAME === "LOKESH"){
    runProgram(`120 90 70
    90 80 110`)
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