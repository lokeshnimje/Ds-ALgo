function runProgram(input){
    // Write code here
    input = input.trim().split('\n') //.map(el => el.trim())
    let row = +input[0]
    let [count, max, count1, max1] = [0,0,0,0]

    for(let i=1; i<=row; i++){
        let arr = input[i].trim().split('');
        count1 = 0;
        for(let j=0; j<arr.length; j++){
            if(arr[j] == "C"){
                count++
                if(max< count){
                    max = count
                }
            }
            else {
                count = 0
            }
            if(arr[j] == "C"){
                count1++
                if(max1 < count1){
                    max1 = count1
                }
            }
            else {
                count1 = 0
            }
        }    }
    console.log(max1, max)
}
if(process.env.USERNAME === "hp"){
    runProgram(`4
    SSSSEEEECCCCEECCCC
    CCCCCSSSSEEECCCCSS
    SSSSSEEESSCCCCCCCS
    EESSSSCCCCCCSSEEEE
`)
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