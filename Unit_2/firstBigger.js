function runProgram(input){
    // Write code here
    input = input.trim().split('\n')
    let j=0
    let n = +input[j++].trim()
    let arr = input[j++].trim().split(' ').map(Number)
    let q = +input[j++].trim()

    // console.log( arr)
    for(let j=3; j<q+3; j++){
        let min = Infinity
        let k = +input[j].trim()
        for(let i=0; i<n; i++){
            if(arr[i] > k){
                if(arr[i] < min){
                    min = arr[i]
                }
            }
        }
        if(min !== Infinity){
            console.log(min)
        }else {
            console.log("-1")
        }
    }

    // this sort & find part is giving ans bt not accepting in OJ
    // let array = arr.sort()
    // // console.log(array)
    
    
    // for(let i=3; i<q+3; i++){
    //     let k = +input[i].trim()
    //     let res = array.find(el => el > k);
    //     console.log(res)
    // }
}
if(process.env.USERNAME === "hp"){
    runProgram(`10
    13 89 81 66 81 63 71 76 73 81
    2
    65
    15`)
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