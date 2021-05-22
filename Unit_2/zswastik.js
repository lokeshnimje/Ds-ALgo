function runProgram(input){
    // Write code here
    // input = input.trim().split('\n')
    // let [row, col] = input[0].trim().split(' ').map(Number)
    // let row_mid = Math.floor(row/2)
    // let col_mid = Math.floor(col/2)
    // console.log(row_mid, col_mid)

    // let mat = []
    // for(let k=1; k<input.length; k++){
    //     mat[k-1] = input[k].trim().split(' ').map(Number)
    // }
    // console.log(mat)
    // let sum1 = 0
    // let sum2 = 0
    // for(let i=0; i<row; i++){
    //     for(let j=0; j<col; j++){
    //        if(i=0  && j>col_mid){
    //         //    sum1 += mat[i][j]
    //            console.log(mat[i][j])
    //        }
    //     }
    // }
    var input=input.trim().split('\n')
    var rc=input[0].trim().split(" ")
    var row= +rc[0].trim()
    var col= +rc[1].trim()

    var matrix=[]
    for (var i=1;i<=row;i++){
        matrix[i-1]=input[i].trim().split(" ").map(Number)
    }
    var total1=0
    var total2=0
    var k=0

    for (var i=0;i<row;i++){
        for (var j=0;j<col;j++){
// Top to bottom swastik
            if(j<Math.floor(row/2)&&(i<1)){
                total1+=matrix[(Math.ceil(row/2))+j][col-1]                //last row
                // console.log(matrix[(Math.ceil(row/2))+j][col-1])
 
             }
             if(j<(Math.floor(row/2))&&(i<1)){
                total1+=matrix[j][i]                                       //first row
                //  console.log(matrix[j][i])
 
             }
             if((i<1)&&(j<col)){
                 total1+=matrix[Math.floor(row/2)][j]                         //mid
                //  console.log(matrix[Math.floor(row/2)][j])
             }
 

// right to left swastik
            if(j<Math.floor(col/2)&&(i<1)){
                total2 += matrix[row-1][j]
                console.log(matrix[row-1][j]);                 //bottom
            }
            if(j>(col-Math.ceil(col/2))&&(i<1)){
                total2 += matrix[i][j]
                // console.log(matrix[i][j])    
                                            //top
            }

            if((j<1)&&(j<col)){
                if(k<row){
                    total2 += matrix[k][Math.floor(col/2)]
                    // console.log(matrix[k][Math.floor(col/2)]) 
                    k++

                }
                     //center
            }
        }
    }
    // console.log(total1,total2)
    // console.log(Math.abs(total1-total2) )
 
}

if(process.env.USERNAME === "hp"){
    runProgram(`3 5
    1 2 3 4 5
    6 7 8 9 10
    11 12 13 14 15`)
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