function runProgram(input){
    // Write code here
    input = input.trim().split('\n')
    let countries = +input.shift()
    // console.log(countries)
    // let mat = input.map(el => el.trim())

    // for (let j=0; j<mat.length; j++){
    //     if(mat[j] === "India"){
    //         console.log(j + 1)
    //         break
    //     }
    // }

    let obj = {}
    for(let i=1; i<= countries; i++){
        let key = input[i-1].trim()
        obj[key] = i
    }
    console.log(obj['India'])
   
}

if(process.env.USERNAME === "hp"){
    runProgram(`5
    Russia
    USA
    Japan
    China
    India`)
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