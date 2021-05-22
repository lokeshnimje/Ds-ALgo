function runProgram(input){
    // Write code here
    input = input.trim().split('\n')  
    let num = +input.shift()
    let val = input[0].trim().split(' ').map(Number)
  
    let indices = new Array(num).fill().map((_,i) => i)

    let sort = (arr) => {
        let len = arr.length;

        for(let i=0; i<len; i++){
            for(let j=0; j<len-1-i; j++){

                if(arr[j] > arr[j+1]){
                    [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
                    let ind = indices[j]
                    indices[j] = indices[j+1]
                    indices[j+1] = ind;
                }
            }
        }
        // console.log(arr)
    }

    sort(val)

    console.log(indices.join(' '))
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