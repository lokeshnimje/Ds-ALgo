function runProgram(input){
    // Write code here
    input = input.trim().split('\n')
    let dim = +input.shift()
    // console.log(dim)

    let mat = []
    for (let i=0; i<dim; i++){
        mat[i] = input[i].trim().split(' ').map(Number)
    }
    // console.log(mat)

    let left = 0;
     let top = 0;
     let right = dim;
     let bottom = dim;
    while (left < right-1 && top < bottom-1){
        let prev = mat[top+1][left]
        for(let i=left; i<right; i++){      // Top row
            let temp = mat[top][i]
            mat[top][i] = prev
            prev = temp
        }
        top++; 
        for(let i=top;i<bottom; i++){       // Right column
            let temp = mat[i][right-1]
            mat[i][right-1] = prev
            prev = temp
        }
        right--
        for(let i=right-1; i>=left; i--){     //Bottom row
            let temp = mat[bottom-1][i]
            mat[bottom-1][i] = prev
            prev = temp
        }
        bottom--
        for(let i=bottom-1; i>=top; i--){     //Left column
            let temp = mat[i][left]
            mat[i][left] = prev
            prev = temp
        }
        left++
    }
    mat.forEach(el => console.log(el.join(' ')))
}


if(process.env.USERNAME === "hp"){
    runProgram(`4
    1 2 3 4
    1 2 3 4
    1 2 3 4
    1 2 3 4`)
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