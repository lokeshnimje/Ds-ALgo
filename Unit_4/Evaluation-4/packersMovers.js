// You are excited about your new job and want to move to Bangalore,
// as soon as possible. You have to transport K units of weight of your stuff to Bangalore, 
// therefore, you hired Masai Packers & Movers to do the job for you. 
// The company has N trucks, each with a certain capacity C. 
// Because of surge in fuel prices, the company has made a new policy 
// that the trucks will be allowed to travelled, only if the truck is completely
//  filled and has no empty spaces. Also, because of some issues, the company has only one driver. 
//  Therefore, in one day only a single truck can be used, to transport the things to Bangalore. 
//  Print the minimum and the maximum number of days, it will take to transport everything to Bangalore. 
//  If it is impossible to transport everything to Bangalore, print -1.


function runProgram(input){
    // Write code here
    input = input.trim().split('\n')
    let [k,n] = input[0].trim().split(' ').map(Number)
    let arr = input[1].trim().split(' ').map(Number)
    let cweight = 0;
    let days = 0
    let max = 0;
    let min = Infinity
    function transport (n, arr, k, cweight, days){
        // console.log(cweight, days, k)
        if(cweight > k){
            // console.log("-1")
            return -1
        } else 
        if(cweight === k){
            max = Math.max(days, max);
            min = Math.min(days, min)
            // console.log(min, max)
            return 
        }
        for(let i=0; i<arr.length; i++){
            transport(n, arr, k, cweight+arr[i], days+1)
        }
    }
    transport(n, arr, k, cweight, days)

    if(min==Infinity && max==0){
        console.log("-1")
    }else {
        console.log(min, max)
    }
}

if(process.env.USERNAME === "hp"){
    runProgram(`36 2
    1 10`)
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