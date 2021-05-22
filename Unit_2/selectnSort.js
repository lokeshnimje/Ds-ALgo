function runProgram(input){
    // Write code here
    input = input.trim().split('\n')
    let num = +input.shift()
    let arr = input[0].trim().split(' ').map(Number)

    for(let i = 0; i < num; i++) {
                                     // Finding the smallest number in the subarray
        let min = i;
        for(let j = i+1; j < num; j++){
            if(arr[j] < arr[min]) {
                min=j; 
            }
        }
        if (min != i) {
                            // Swapping the elements
            let tmp = arr[i]; 
            arr[i] = arr[min];
            arr[min] = tmp;      
        }
    }
    console.log(arr.join(' '));
}

if(process.env.USERNAME === "hp"){
    runProgram(`5
    3 5 0 9 8`)
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