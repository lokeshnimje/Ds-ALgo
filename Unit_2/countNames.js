function runProgram(input){
    // Write code here
    input = input.trim().split('\n')
    let num = +input.shift()

    let obj = {}
    for(let i=0; i<num; i++){
        let elem = input[i].trim();
        obj[elem] = obj[elem] === undefined ? 1 : ++obj[elem]
    }

    let arr = Object.keys(obj).sort()   // taking only key of object in array form & sorting it.

    // console.log(arr)

    for(let val of arr){
        console.log(val, obj[val])
    }

    // let arr = []
    // for(key in obj){
    //     arr.push([key, obj[key]])
    // }
    // arr.sort()
    // for(let j=0; j<arr.length; j++){
    //     console.log(arr[j].join(' '))
    // }

   
}
if(process.env.USERNAME === "hp"){
    runProgram(`4
    prateek
    nrupul
    yogesh
    prateek`)
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