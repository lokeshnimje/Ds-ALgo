// For one week:

// 1. Flour = 5kg| Price = 110 per kg 

// 2. Rice = 2kg| Price = 120 per kg

// 3. Sugar = 2kg| Price = 42 per kg

// 4. Pulse = 3kg| Price = 53 per kg

// 5. Bread = 2 packet | Price = 40 per packet

// 6. Milk = 5 litre| Price = 32 per litre

// 7. Oil = 2 litre| Price = 126 per litre


function runProgram(input){

    var prices = [110, 120, 42, 53, 40, 32, 126]
    var weights = [5, 2, 2, 3, 2, 5, 2]

    input = input.trim().split('\n')
    var weeks = Number(input.shift())
    var arr = input[0].trim().split(' ')
    // console.log(weeks , arr)

var sum = 0
for(var i = 0; i < prices.length; i++){
    sum = sum + Number(arr[i]) * Number(prices[i]) * Number(weights[i])
    
}
console.log(sum * weeks)

}

if(process.env.USERNAME === "LOKESH"){
    runProgram(`4
    0 1 1 1 0 0 1`)
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
