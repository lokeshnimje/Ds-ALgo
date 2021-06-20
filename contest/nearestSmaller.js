// find nearest smaller element on either side of particular element.
function runProgram(input){
    // Write code here
    input = input.trim().split("\n")
    let test  = +input[0]
    let line = 1
    for (let k = 0 ; k < test; k++){
        let len = +input[line++]
        let arr = input[line++].trim().split(" ").map(Number)
        let leftindex = []
        let leftEle = []
        for (let i = 0; i < len; i++){
            while(leftEle.length != 0 && arr[i] <= arr[leftEle[leftEle.length - 1]]){
                leftEle.pop()
            }
            if (leftEle.length === 0) {
                leftindex.push(-1)
                leftEle.push(i)
            } 
            else if (leftEle.length != 0 && arr[i]> arr[leftEle[leftEle.length - 1]]) {
                leftindex.push(leftEle[leftEle.length - 1])
                leftEle.push(i)
            }
        }

        let rightindex = []
        let rightELe = []
        for (let i = len-1; i >=0; i--){
            while(rightELe.length != 0 && arr[i] <= arr[rightELe[rightELe.length - 1]]){
                rightELe.pop()
            }
            if (rightELe.length === 0) {
                rightindex.push(-1)
                rightELe.push(i)
            }
            else if (rightELe.length != 0 && arr[i] > arr[rightELe[rightELe.length - 1]]) {
                rightindex.push(rightELe[rightELe.length - 1])
                rightELe.push(i)
            }
        }

        let ans = ""
        rightindex = rightindex.reverse()
        for (let i = 0; i < len; i++) {
            if (leftindex[i] == -1 && rightindex[i] == -1) {
                ans += -1 + " "
            }
            else if (leftindex[i] == -1 && rightindex[i] != -1) {
                ans += arr[rightindex[i]] + " "
            }
            else if (leftindex[i] != -1 && rightindex[i] == -1){
                ans += arr[leftindex[i]] + " "
            }
            else{
                if (Math.abs(leftindex[i] - i ) === Math.abs(rightindex[i] - i )) {
                    ans += arr[leftindex[i]] + " "
                }
                else if (Math.abs(leftindex[i] - i) > Math.abs(rightindex[i] - i) ) {
                    ans += arr[rightindex[i]] + " "
                }
                else if (Math.abs(leftindex[i] - i) < Math.abs(rightindex[i] - i) ) {
                    ans += arr[leftindex[i]] + " "
                }
            }
        }
        console.log(ans.trim())

    }  
}

if(process.env.USERNAME === "hp"){
    runProgram(`1
    8
    39 27 11 4 24 32 32 1`)
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