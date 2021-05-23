function runProgram(input){
    // Write code here
    input = input.trim().split('')
    let char = "({[)}]"
    let arr = []
    for(let i=0; i<input.length; i++){
        for(let j=0; j<char.length; j++){
            if(input[i] == char[j]){
                arr.push(input[i])
            }
        }
    }
    // console.log(arr)
    let len = arr.length;
    // console.log(arr, len)
    let stack = []
    let stack2 = []
    for(let i=0; i<len; i++){
        if(arr[i] == '(' || arr[i] == '{' || arr[i] == '['){
            stack.push(arr[i])
        } else if (arr[i] == ')' || arr[i] == '}' || arr[i] == ']'){
            stack2.push(arr[i])
        } 
    }
   
    let count = 0
    if(stack.length !== stack2.length){
        console.log("unbalanced")
    } else {
        for(let i=0; i<stack.length; i++){
            if(stack[stack.length-1] == stack2[stack2.length-1]){
                console.log("unbalanced")
                break 
            } else {
                count++
                stack.pop()
                stack2.pop()
            }
        }
    }
    // console.log(stack)
    if(count > 0){
        console.log("balanced")
    }
}

if(process.env.USERNAME === "hp"){
    runProgram(`[one[two[three[four[five[six[seven[eight[nine[ten]]]]]]]]]]`)
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