// Alex is celebrating his birthday and wants to buy a few things for himself.

// There are n items present in the shop indexed from 1 to n. 
// He wished he could buy everything but he has been instructed by his mother that he can buy exactly k items.

// Print all the various possible combinations of items he can buy.

// Make sure the combinations are sorted and distinct.

// For Clarity -
// [1,2] is valid while [2,1] is not.


function runProgram(input){
    // Write code here
    input = input.trim().split('\n')
    let [n, k] = input[0].trim().split(' ').map(Number)
    let curr = 1;
    let arr = []
    
   function gifts( n,k,curr, arr){
       if(arr.length === k){
           console.log(arr.join(' '))
           return
       }
       for(let i=curr; i<=n; i++){
           arr.push(i)
           gifts(n, k, i+1, arr)
           arr.pop()
       }
   }
  gifts(n,k,curr,arr)
  // Time complexity : O(2 to power n)
  // because for every element we have two choice either we include or not include
}

if(process.env.USERNAME === "hp"){
    runProgram(`4 2`)
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