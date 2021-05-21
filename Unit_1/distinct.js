function runProgram(input){
    // Write code here
    input = input.trim().split('\n') 
    var a = Number(input.shift());
    var items = input[0].trim().split(" ");
    var obj = {}

    for (var i = 0; i < items.length; i++) {
        var elem = items[i] //2 2 2 1 1

        if (obj[elem] == undefined) {
            obj[elem] = 1
        }
         else {
            obj[elem] = obj[elem] + 1
        }
    }
    // console.log(obj)
        // console.log(Object.keys(obj).length)             

    var sum = 0
    for (key in obj) {
        if (obj[key] === 1) {   
            sum += Number(key)
        }
    }
    console.log(sum)
}

if(process.env.USERNAME === "LOKESH"){
    runProgram(`5
    2 2 2 1 1`)
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