function runProgram(input){
    // Write code here
    let str = input.trim().split('')
    let arr = []
    for(let i=0; i<str.length; i++){
        if(str[i] == "{" || str[i] == "[" || str[i] == "(" || str[i] == ")" || str[i] == "]" || str[i] == "}" ){
            arr.push(str[i])
        }
    }
    let len = arr.length;
    console.log(arr, len)
    let stack = []
    for(let i=0; i<len; i++){
        if(arr[i] == '(' || arr[i] == '{' || arr[i] == '['){
            stack.push(arr[i])
        } else if (stack.length !== 0){
            if((stack[stack.length-1] === '(' && arr[i] == ')')
            || (stack[stack.length-1] === '{' && arr[i] == '}')
            || (stack[stack.length-1] === '[' && arr[i] == ']')){
                stack.pop()
            }
        } else {
            stack.push(arr[i])
        }
    }
    console.log(stack)
    if(stack.length == 0){
        console.log("balanced")
    } else {
        console.log("unbalanced")
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