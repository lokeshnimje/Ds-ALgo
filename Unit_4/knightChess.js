function runProgram(input){
    // Write code here
    let [r, c, n] = input.trim().split(' ').map(Number)
    // console.log(i,j)
    // let col = new Array(10).fill(0)
    // let chess = new Array(10).fill(col)
    let chess = []
    for(let i=0; i<11;i++){
        chess[i]=[]
        for(let j=0;j<11;j++){
            chess[i].push(0)
        }
    }
    let count = 0
    function move(r,c,n){
        // console.log(r,c,n)
        if(r>10 || c>10 || r<1 || c<1){
            return 
        }
        if(n == 0 && chess[r][c] == 1){
            return 
        }
        if(n == 0){
            chess[r][c] = 1;
            count += 1
        } else {
            move(r+2, c+1, n-1)
            move(r+2, c-1, n-1)
            move(r-2, c+1, n-1)
            move(r-2, c-1, n-1)
            move(r+1, c+2, n-1)
            move(r+1, c-2, n-1)
            move(r-1, c+2, n-1)
            move(r-1, c-2, n-1)
        }
    }
    move(r,c,n)
    console.log(count)    
}

if(process.env.USERNAME === "hp"){
    runProgram(`3 3 1`)
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