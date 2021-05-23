function runProgram(input){
    // Write code here
    input = input.trim().split('\n')
    let n = +input[0].trim()
    let arr = input[1].trim().split(' ').map(Number)
    // console.log(arr, n)
    let index = new Array(n).fill().map((_,i) => i)
    
    for(let i=0; i<n; i++){
        for(let j=0; j<n-i-1; j++){
            if(arr[j] > arr[j+1]){
                let temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp

                let ind = index[j]
                index[j] = index[j+1]
                index[j+1] = ind
            }
        }
    }
    console.log(index.join(' '))
    // console.log(arr)
    //time compl is O(n^2) because we use bubble sort
    // spcae comp is O(n) because we create one more array of same size as original,
    // and that is not changing.
}

if(process.env.USERNAME === "hp"){
    runProgram(`5
    4 5 3 7 1`)
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