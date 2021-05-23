function runProgram(input){
    // Write code here
    input = input.trim().split('\n')
    let n = +input.shift()
    let arr = []
    for(let i=0; i<n;i++){
        arr[i] = input[i].trim().split(' ')
    }
   for(let i=0; i<n; i++){
       for(let j=0; j<n-i-1; j++){
            if(Number(arr[j][1]) < Number(arr[j+1][1])){
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
            } else if(Number(arr[j][1]) == Number(arr[j+1][1]) && (arr[j][0] > arr[j+1][0])){
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
            } 
       }
   }
//    console.log(arr)
    // let rank = null;
    // let res = arr.map((el, i) => {
    //     if(i === 0 || el[1] !== arr[i-1][1]){
    //         rank = i + 1;
    //     }
    //     return rank + " " + el[0];
    // });

    // console.log(res.join("\n"))
    let count = 1
    let temp = 0
    for(let i=0; i<n; i++){
        temp++
        if(i>0 && arr[i][1] == arr[i-1][1]){
            console.log(count + " "+ arr[i][0])
        }else {
            count = temp
            console.log(count + " "+ arr[i][0])
        }
    }
}

if(process.env.USERNAME === "hp"){
    runProgram(`6
    rancho 45
    chatur 32
    raju 30
    farhan 28
    virus 32
    joy 45`)
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