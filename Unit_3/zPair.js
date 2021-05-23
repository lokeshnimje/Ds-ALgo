function runProgram(input){
    // Write code here
    input = input.trim().split('\n')
    let test = +input[0].trim();

    for(let i=0, j=1; i<test; i++){
        let len = +input[j++].trim()
        let arr = input[j++].trim().split(' ').map(Number)
        // console.log(arr)
        let pairs = 0
        
        let twice = {}
        let thrice = {}
        for(val of arr){
            if(val == 0){
                pairs = (len * (len-1))/2
            } else {
                let two = val*2
                let three = val*3
                if(two in twice){
                    ++twice[two]
                } else {
                    twice[two] = 1
                }
                if(three in thrice){
                    ++thrice[three]
                } else {
                    thrice[three] = 1
                }
            }
        }
        // console.log(twice)
        // console.log(thrice)

        for(key in twice){
            if(key in thrice){
                pairs = twice[key] * thrice[key]
            }
        }
        console.log(pairs)
    }
}

if(process.env.USERNAME === "hp"){
    runProgram(`2
    6
    6 6 6 4 4 4
    4
    0 0 0 0`)
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