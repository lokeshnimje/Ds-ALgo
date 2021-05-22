function runProgram(input){
    // Write code here
    input = input.trim().split('\n')
    let num = +input.shift()

    let arr = input.map(el => el.trim().split(' ')).map(el => [el[0], +el[1]])  // array with numbers of rank

    for(let i=0; i<num; i++){
        for(let j=0; j<num-i-1; j++){
            if(arr[j][1] < arr[j+1][1]){
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
            } 
            else if(arr[j][0] > arr[j+1][0] && arr[j][1] == arr[j+1][1]){
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
            }
        }
    }
    console.log(arr)
    

    let rank = null;
    let res = arr.map((el, i) => {
        if(i === 0 || el[1] !== arr[i-1][1]){
            rank = i + 1;
        }
        return rank + " " + el[0];
    });

    console.log(res.join("\n"))

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