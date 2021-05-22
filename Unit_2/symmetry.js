function runProgram(input){
    // Write code here
     input = input.trim().split('\n')
     let test_case = +input[0]
    //  console.log(test_case)

    for (let i=0, j=1; i<test_case; i++){    
        var num = Number(input[j++]);

        var matrix = []
        for (let k=0; k<num; k++){
            matrix[k] = input[j++].trim()
        }       
        // console.log(matrix)    
        let flagH = true
        let flagV = true
    
        for(let l=0,y=num-1; l<num; l++, y--){
            if(matrix[l] !== matrix[y]) flagH=false
            if(flagV){
                for(let x=0 , m=num-1; x<num/2; x++, m--){
                    if(matrix[l][x] !== matrix[l][m]){
                        flagV =false
                        break
                    }
                }
            }
            if(!flagV && !flagH) break
        }
        if(flagV && flagH){
            console.log("BOTH")
        }
         else if(!flagH && !flagV){
            console.log("NO")
        }
         else if (!flagV){
            console.log("HORIZONTAL")
        }
         else{
            console.log("VERTICAL")
        }
    }
}

if(process.env.USERNAME === "hp"){
    runProgram(`3
    4
    *.*.
    .*.*
    *.*.
    .*.*
    3
    .*.
    *.*
    .*.
    3
    ..*
    **.
    ..*`)
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