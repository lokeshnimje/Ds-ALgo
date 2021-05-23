function runProgram(input) {
    input = input.trim().split("\n")
    let test= +input.shift()

    for(let i=0; i<test; i++){
        let arr = input[i].trim().split('')
        // console.log(arr)
        if(arr.length % 2 !== 0){
            console.log("not balanced")
        } else {
            let stack = []
            for(let j=0; j<arr.length; j++){
                if(arr[j] === "{" || arr[j] === "(" || arr[j] === "["){
                    stack.push(arr[j])
                } 
                else if (stack.length !==0 ){
                    if ((arr[j] == "}" && stack[stack.length-1] == "{") 
                    || (arr[j] == ")" && stack[stack.length-1] == "(")
                    || (arr[j] == "]" && stack[stack.length-1] == "[")){
                        stack.pop()
                    }
                }
                else {
                    stack.push(arr[j])
                } 
            }   
            // console.log(stack)
            if(stack.length == 0){
                console.log("balanced")
            } else  {
                console.log("not balanced")
            }
        }
    }
 }

 if(process.env.USERNAME === "hp"){
    runProgram(`3
    {([])}
    ()
    ))))))
    `)
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
