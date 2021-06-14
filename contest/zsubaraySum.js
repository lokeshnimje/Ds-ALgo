function runProgram(input){
    // Write code here
    input = input.trim().split('\n')
    let [n,k]  = input[0].trim().split(' ').map(Number)
    let arr = input[1].trim().split(' ').map(Number)
    // console.log(k, arr)
    let len = []
    for(let i=0; i<n; i++){
        let temp = []
        for(let j=i;j<n; j++){
            temp.push(arr[j])
            let sum = temp.reduce((a,b) => {
                return a+b
            },0)
            if(sum % k !== 0){
               len.push(temp.length)
            }
        }
    }
    let newArr = len.sort((a,b) => b-a)
    // console.log(newArr[0])
    let obj = {}
    for(let n=0; n<newArr.length;n++){
        let e = newArr[n]
        obj[e] = obj[e] === undefined ? 1 : ++obj[e]
    }
    console.log(obj[newArr[0]])

}

if(process.env.USERNAME === "hp"){
    runProgram(`4 3
    2 3 4 6`)
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