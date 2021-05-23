function runProgram(input){
    // Write code here
    input = input.trim().split('\n')
    let n = +input.shift()
    let arr = []
    for(let i=0; i<n; i++){
        arr = input.map(el => el.trim().split(' ')).map(el=>[el[0], +el[1], +el[2], +el[3]])
    }
    
    for( let i=0; i<n; i++){
        for(let j=0; j<n-i-1; j++){
            if(arr[j][3] < arr[j+1][3]){
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
            } else if ((arr[j][3] == arr[j+1][3]) && (arr[j][1] < arr[j+1][1])){
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
            } else if ((arr[j][3] == arr[j+1][3]) && (arr[j][1] == arr[j+1][1]) && (arr[j][2] > arr[j+1][2])){
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
            } else if ((arr[j][3] == arr[j+1][3]) && (arr[j][2] == arr[j+1][2]) && (arr[j][1] == arr[j+1][1]) && (arr[j][0] > arr[j+1][0])){
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
            }
        }
    }
    
    // console.log(arr)
    for(let i=0; i<8; i++){
        console.log(arr[i][0])
    }
 
}

if(process.env.USERNAME === "hp"){
    runProgram(`10
    jack 158 85 112
    john 168 74 124
    arti 148 65 120
    bhuvan 182 84 124
    navi 182 84 124
    vijay 175 88 115
    amit 180 89 119
    kevin 182 77 120
    rohit 174 85 100
    vivek 184 75 111
    
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