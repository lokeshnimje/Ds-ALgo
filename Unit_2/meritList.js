function runProgram(input){
    // Write code here
    input = input.trim().split('\n')
    let num = input.shift()
    
    mat = input.map(el => el.trim().split(' ')).map(el => [el[0], +el[1], +el[2], +el[3]])

    for(let i=0; i<num; i++){
        for(let j=0; j<num-i-1; j++){
            if(mat[j][3] < mat[j+1][3]){        // High IQ
                [mat[j], mat[j+1]] = [mat[j+1], mat[j]]
            }       // High Height
           else if((mat[j][3] == mat[j+1][3]) && (mat[j][1] < mat[j+1][1])){
                [mat[j], mat[j+1]] = [mat[j+1], mat[j]]
            }       // Less weight
           else if((mat[j][3] == mat[j+1][3]) && (mat[j][1] == mat[j+1][1]) && (mat[j][2] > mat[j+1][2])){
                [mat[j], mat[j+1]] = [mat[j+1], mat[j]]
            }       // Lexographic name
           else if((mat[j][3] == mat[j+1][3]) && (mat[j][1] == mat[j+1][1]) &&(mat[j][2] == mat[j+1][2]) && (mat[j][0] > mat[j+1][0])){
                [mat[j], mat[j+1]] = [mat[j+1], mat[j]]
            }
        }
    }
    for(let i=0; i<8; i++){
        console.log(mat[i][0])
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
    vivek 184 75 111`)
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