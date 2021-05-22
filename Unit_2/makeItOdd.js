// Joey has an array A consists of N integers.

// He can only do one move, he can choose two indices 0≤i,j≤n-1 such that i≠j and set A[i]=A[j] (setting the value of ith value of A to jth value of A).
// He can perform such moves any number of times (possibly, zero). He can choose different indices in different operations, to make the sum of all the numbers odd.
// We need to Help Joey in finding out for given arrays if it is possible to make the sum odd by doing only the move mentioned above.
// If it is possible output 'YES'
// else output 'NO'
// You have to answer T independent test cases.

function runProgram(input){
    // Write code here
    input = input.trim().split("\n");
    var test = +input[0].trim();

    for(let i=0, j=1; i<test; i++){
        let len = +input[j++].trim()
        let arr = input[j++].trim().split(' ').map(Number)
        // console.log(arr)
        
        let sum = arr.reduce(function(a, c){
            return a+c
        }, 0)
        if(sum % 2 !== 0){
            console.log("YES")
        } else {
            check()
            if(flag == true){
                console.log("YES")
            } else {
                console.log("NO")
            }
        }
        
        function check(){
            let countOdd = 0
            let countEven = 0
            for(let i=0; i<len; i++){
                if(arr[i] % 2 !== 0){
                   countOdd++
                } else {
                    countEven++
                }
            }
            if((countEven > 0) && (countOdd > 0)){
                flag = true
            } else {
                flag = false
            }
            return flag
        }
    }
}

if(process.env.USERNAME === "hp"){
    runProgram(`2
    5
    1 2 3 4 5
    5
    2 2 2 2 2`)
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