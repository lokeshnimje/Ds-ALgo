function runProgram(input){
    // Write code here
    input = input.trim().split('\n') //.map(el => el.trim())
    let days = +input[0]
    // console.log(input)
    let max = 0
    let maxDay = 0;
    let streakDay = 0
    let streak = 0
    for(let i=1; i<=days; i++){
        let daily = input[i].trim()
        for(let j=0; j<daily.length; j++){
            if(daily[j] === "C"){
                streak++
                streakDay++
            }
            else {
                if(maxDay < streakDay){
                    maxDay = streakDay
                }    
                if(max < streak){
                    max = streak
                }
                streakDay = 0
                streak = 0
            } 
            if (j === daily.length-1){
                if(maxDay < streakDay){
                    maxDay = streakDay
                } 
                if(i === days && max < streak) {
                    max = streak
                }
                streakDay = 0
            }
        }
    }
    console.log(maxDay, max)
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