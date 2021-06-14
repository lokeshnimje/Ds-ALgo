
function runProgram(input) {
	// Write code here
    // input = input.trim().split("\n")
    // let n = +input[0].trim()
    // let arr = input[1].trim().split(' ').map(Number)

    // let test = +input[2].trim()
    // for(let i=0, j=3; i<test; i++){
    //     let [L,R] = input[j++].trim().split(' ')
    //     console.log(sum(L,R))
    // }
    // function sum (L,R){
    //     let sum = 0
    //     for(let i=L-1; i<R; i++){
    //         sum += arr[i]
    //     }
    //     return sum
    // }

    input = input.trim().split("\n")
    let arr = input[1].trim().split(" ").map(Number)
    let sum = 0;
    let array = []
    for(let i = 0; i < arr.length; i++){
        sum+= arr[i]
        array.push(sum)
    }
    for(let i = 3; i < input.length; i++){
        let quer = input[i].trim().split(" ").map(Number)
        // console.log(quer);
        let res = (array[quer[1] - 1] - array[quer[0] - 1] + arr[quer[0] - 1])
        console.log(res);
    }
}
if(process.env.USERNAME === "hp"){
    runProgram(`4
    3 2 1 5
    4
    1 3
    2 4
    1 4
    3 3`)
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