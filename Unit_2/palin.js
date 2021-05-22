function runProgram(input){
    // Write code here
    input = input.trim().split(' ')
    let len = input.length
    let arr = ""
    for(let k=0; k<len; k++){
        arr+= input[k]
    }
    // console.log(arr.toLowerCase())
    let str = arr.trim().split('')
    let upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    let lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    
    for(let u=0; u<upperCase.length; u++){          // converting to lowercase
        for(let s=0; s<str.length; s++){
            if(str[s] === upperCase[u]){
                str[s] = lowerCase[u]
            }
        }
    }    
    // console.log(str)
    let res = ""                    // removing non-alphabet symbols
    for(let n=0; n<str.length; n++){
        for(let m=0; m<lowerCase.length; m++){
            if(str[n] === lowerCase[m]){
                res += str[n]
            }
        }
    }    
    
    // console.log(res)
    let flag = true             // checking for palindrome
    for(let i=0, j=res.length-1; i<res.length, j>=0; i++, j--){ 
        if(res[i] !== res[j]){
            flag = false
        }
    }
    (!flag) ? console.log("NO") : console.log("YES")

}

if(process.env.USERNAME === "hp"){
    runProgram(`Red rum, sir, is murder`)
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