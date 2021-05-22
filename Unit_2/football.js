function runProgram(input){
    // Write code here
    input = input.trim().split('\n')
    let n = +input.shift()
    let goal  = input.map(el => el.trim())
    
    // console.log(goal[1][1])
    let obj = {}
    for(let i=0; i<n; i++){
            let elem = goal[i]
            obj[elem] = obj[elem] === undefined ? 1 : ++obj[elem]
    }
    // console.log(obj)
    var arr = [];           // pushing object to array for sorting larger to lower
    for (var key in obj) {
        arr.push([key, obj[key]]);
    }
    console.log(arr)
    arr.sort(function(a, b) {
        return b[1] - a[1];
    });
    console.log(arr[0][0])
    
    // questn says only 2 team is their so we dont need to check for more than 2 teams
    // and there is no tie. so atleast one player must  win.

    // arjun's approach:

    // let len = +input[0]
    // let goals = {}
    // let teams = []

    // for(let i=1; i<=len; i++){
    //     let key = input[i].trim()
    //     if(key in goals){
    //         goals[key]++
    //     } else {
    //         goals[key] = 1
    //         teams.push(key)     // pushing only values of object to array, for first occurence
    //     }
    // }
    // console.log(goals[teams[1]])
    // if(teams.length> 1){
    //     console.log(goals[teams[0]] > goals[teams[1]] ? teams[0] : teams[1])
    // } else {
    //     console.log(teams[0])
    // }
}

if(process.env.USERNAME === "hp"){
    runProgram(`5
    A
    ABA
    ABA
    A
    A`)
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