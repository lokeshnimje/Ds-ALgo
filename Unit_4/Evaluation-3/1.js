function runProgram(input){
    // Write code here
    input = input.trim().split('\n')
    let n = +input[0].trim()
    let arr = input[1].trim().split(' ').map(Number)
    let flagFirstDrop = false
    let flagDrop = false
   
    for(let i=0; i<arr.length; i++){
        if(arr[i] <= arr[i+1] ){
            flagDrop = false
        }else {
            if(flagFirstDrop && !flagDrop){
                console.log("no")
                return
            }else if (!flagFirstDrop && !flagDrop){
                console.log("yes")
            }
        }
    }

    // console.log(arr)
    // let rem = ""
    // let count = 0
    // for(let i=0; i<arr.length; i++){
    //     let str = ""
    //     rem += arr[i] + " "
    //     // str.push(arr[i])
    //     let res = ""
    //     for(let j=arr.length-1; j >= i+1; j--){
    //         res += arr[j] + " "
    //     }
    //    str += rem+res
    //    str = str.trim().split(' ').map(Number)
    //    console.log(str)
    //     if(checkSort(str)){
    //         count++
    //     }
    // }
    // console.log(count > 0 ? "YES" : "NO")

    // function checkSort(str){
    //     for(let i=0; i<str.length ; i++){
    //         if(str[i] > str[i+1]){
    //            return false
    //         }
    //     }
    //     return true
    // }
}

if(process.env.USERNAME === "hp"){
    runProgram(`6
    1 4 3 2 7 9`)
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