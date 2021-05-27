function runProgram(input){
    // Write code here
    input = input.trim().split('\n')
    let n = input[0].trim()
    let arr = input[1].trim().split(' ').map(Number)
    // console.log(mergeSort(arr))
    mergeSort(arr)
 
    function mergeSort(arr) {
        if(arr.length < 2) return arr;
        let middle = Math.floor(arr.length /2);
        let left = arr.slice(0,middle);
        let right = arr.slice(middle, arr.length)
        left = left.sort((a,b)=>b-a)
        right = right.sort((a,b)=>b-a)
        // console.log(left, right)
        return mergedArray(left, right)
    }
    function mergedArray(left, right) {
        let res = []
        while(left.length && right.length){
            res.push(left[0] > right[0] ? left.shift() : right.shift())
        }
        while(left.length){
            res.push(left.shift())
        }
        while(right.length){
            res.push(right.shift())
        }
        console.log(res.join(' '))
    }
  
}

if(process.env.USERNAME === "hp"){
    runProgram(`5
    2 3 1 4 5`)
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