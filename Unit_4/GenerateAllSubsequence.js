
function runProgram(input) {
	// Write code here
    input=input.split("\n")
    let n = +input[0]
    let s = input[1].trim().split("") //array
    let i=-1
    let res=""
    let out=[]
    console.log(s)
    subSequence(n,s,i,res,out)  
}

function subSequence(n,s,i,res,out)  {
    // console.log("hi ",n,i,res)
    if(i===n){
        return   
    }
    if(res != ""){
        console.log(res)
    }  
    for(let j=i+1; j<n; j++){
        res += s[j]   // res = ab
    subSequence(n,s,j,res,out)
    res = res.substring(0,res.length-1)
        // subSequence(n,s,i-1,res,out)
    }
}

if(process.env.USERNAME === "hp"){
    runProgram(`4
    abcd`)
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