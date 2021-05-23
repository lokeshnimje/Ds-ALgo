function runProgram(input){
    // Write code here
    input = input.trim().split('\n')
    let test = +input[0].trim()

    for(let i=0,j=1; i<test; i++){
        let [n,m] = input[j++].trim().split(' ').map(Number)
        let arr = input[j++].trim().split(' ').map(Number)
        let count = 0
        for(let i=0; i<n-2; i++){
           for(let j=i+1; j<n-1; j++){
               for(let k=j+1; k<n; k++){
                   if(arr[i]+arr[j]-arr[k] == m){
                    //    console.log(arr[i], arr[j], arr[k])
                    count++
                   }
               }
           }
        }
        console.log(count)
    }

}

if(process.env.USERNAME === "hp"){
    runProgram(`2
    3 0
    1 2 3
    5 4
    3 2 3 1 5`)
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