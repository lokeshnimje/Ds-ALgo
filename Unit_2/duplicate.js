function runProgram(input){
    // Write code here
    input = input.trim().split('\n')
    let test = +input[0].trim()

    for(let i=0, j=1; i<test; i++){
        let dim = +input[j++]
        let arr = input[j++].trim().split(' ').map(Number)
    // console.log(arr) 
        let obj ={}
        // arjun's approach
        let flag = false
        for(let val of arr){
            if(val in obj){
                flag = true
                break
            } else {
                obj[val] = 1
            }
        }
        console.log(flag ? "YES" : "NO")

        // My approach
        // for(let k=0; k<dim; k++){
        //     let elem = arr[k]
        //     obj[elem] = obj[elem] === undefined ? 1 : ++obj[elem]
        // }     
        // // console.log(obj) 
        // let count = 0 
        // for(key in obj){
        //     if(obj[key] > 1){
        //         count++
        //     } 
        // }
        // console.log(count > 0 ? "YES" : "NO")
    }
    
}

if(process.env.USERNAME === "hp"){
    runProgram(`3
    1
    1
    2
    1 1
    3
    1 2 3`)
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