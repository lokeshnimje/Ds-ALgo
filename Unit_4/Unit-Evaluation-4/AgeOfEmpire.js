function runProgram(input){
    // Write code here
    input = input.trim().split('\n')
    let n = +input[0].trim()
    let arr = input[1].trim().split(' ').map(Number)
    let len = arr.length
    let curr = []
    function find(len ,n,curr, arr){
        if(curr.length === n){
            console.log(curr)
            return
        }
        for(let i=0; i<arr.length; i++){
            curr.push(arr[i])
            find(len, n, curr, arr)
            curr.pop()
        } 
    }
    find(len, n, curr, arr)
// console.log(arr,n)
//     let res = []
//     for(let i=0; i<n; i++){
//         res.push(Math.floor((arr[i]+arr[i+2])/2))
//     }
//    console.log(res.reduce((a,b) => {return a+b},0))
}

if(process.env.USERNAME === "hp"){
    runProgram(`2
    1 3 1 2`)
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