// if given query is 1 then sort array in ascending order but even first then odd
// if given query is 2 then sort array in ascending order but odd first then even.

function runProgram(input) {
	// Write code here
    input = input.trim().split("\n")
    let test = +input[0].trim()
    for(let i=0, j=1;i<test;i++){
      let n = +input[j++].trim()
      let arr = input[j++].trim().split(" ").sort((a,b)=>a-b)
      let q = input[j++].trim()
      let even =[]
      let odd = []
    
        for(let i=0; i<n; i++){
            if(arr[i]%2==0){
                even.push(arr[i])
            } else{
                odd.push(arr[i])
            }
        }
        // console.log(even, odd,q)
        let ans = []
        if(q == 1){
            ans.push(...even,...odd)
        }else if(q == 2){
            ans.push(...odd,...even)
        }
        console.log(ans.join(" "))
    }
}

if(process.env.USERNAME === "hp"){
    runProgram(`2
    6
    1 3 5 2 7 4
    1
    6 
    1 3 5 2 7 4
    2`)
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